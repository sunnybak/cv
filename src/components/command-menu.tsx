"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { SYSTEM_PROMPT } from "@/data/gen-data";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconArrowRight } from '@/components/ui/icons'

import { MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { useChat } from 'ai/react';

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const messagesEndRef = React.useRef(null)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollToBottom = () => {
    (messagesEndRef.current as any)?.scrollIntoView({ behavior: "smooth" });
  };

  const initialMessages: {
    id: string;
    role: "system" | "user" | "assistant";
    content: string;
  }[] = [
    {
      id: '1',
      role: 'system',
      // content: 'The user is a student at UCI who is trying to find a job. Based on this information chat with the recruiter, while trying to promote the student.'
      content: SYSTEM_PROMPT,
    },
  ];

  const { messages, input, setMessages, setInput,  handleInputChange, handleSubmit } = useChat({ initialMessages });

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const promptEngineer = (form: any) => {
    // messages.map(m => {
    //   if (m.role === 'user') {
    //     return ` ${m.content}`;
    //   } else {
    //     return m.content;
    //   }
    // });
    // setMessages(messages);
    // <form onSubmit={(e) => {promptEngineer((e.target as HTMLFormElement).question.value)}}></form>
    // const input = (form.target as HTMLFormElement).question.value;
    // set the proper value in the form
    handleSubmit(form);
  }

  const exampleMessages = [
    {
      heading: "Briefly introduce yourself.",
      message: "Briefly introduce yourself."
    },
    {
      heading: "Summarize your experience in fullstack development",
      message: "Summarize your experience in fullstack development"
    },
    {
      heading: "Tell me more about your projects in blockchain",
      message: "Tell me more about your projects in blockchain"
    },
  ];


  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command menu
      </p>

      <div className="fixed inset-10 flex items-end justify-end py-30 px-30">
        <Button
          onClick={() => setOpen((open) => !open)}
          variant="default"
          size="lg"
          className="fixed bottom-16 right-16 flex rounded-xl shadow-3xl print:hidden"
        >
          <p className="px-2">Chat with my resume </p>
          <MessageSquare className="my-8 size-4" />
        </Button >
      </div>

      {
        open && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="xl:max-w-[700px] max-w-100 w-[700px] h-[500px]">
              <DialogHeader>
                <DialogTitle>Resume Chat</DialogTitle>
                <DialogDescription>
                  Feel free to chat with my resume and ask questions about my experience.
                  <div className="mt-4 flex flex-col items-start space-y-2">
                    {exampleMessages.map((message, index) => (
                      <Button
                        key={index}
                        variant="link"
                        className="h-auto p-0 text-base"
                        onClick={() => setInput(message.message)}
                      >
                        <IconArrowRight className="mr-2 text-muted-foreground" />
                        <p>{message.heading}</p>
                      </Button>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="rounded-md border px-2" >
                <div className="flex flex-col w-full py-14 mx-0 stretch">
                  {messages.map(m => (
                    m.role !== "system" && (
                      <div key={m.id} className={`whitespace-pre-wrap py-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block rounded-xl py-2 px-4 ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                          {m.content}
                        </div>
                      </div>)
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <form onSubmit={promptEngineer}>
                <div className="grid gap-4 py-4 ">
                  <div className="grid grid-cols-5 items-center gap-4">
                    {/* <Label htmlFor="name" className="text-right">
                    Prompt
                  </Label> */}
                    <Input id="question" onChange={handleInputChange} value={input} className="col-span-4" />
                    <Button type="submit" className="col-span-1">Ask</Button>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        )
      }


    </>
  );
};
