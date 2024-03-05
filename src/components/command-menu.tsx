"use client";

import * as React from "react";

import {
  SunnyAvatar,
} from "@/images/avatars";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { SYSTEM_PROMPT } from "@/data/gen-data";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import { IconArrowRight } from '@/components/ui/icons'

import { MessageSquare, SaveIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import Image from "next/image";
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

  const { messages, input, setMessages, setInput, handleInputChange, handleSubmit } = useChat({ initialMessages });

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
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to chat with me
      </p>

      {/* Chat button and dialog */}
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="default"
        size="lg"
        className="fixed bottom-16 right-16 flex rounded-xl shadow-3xl print:hidden"
      >
        <p className="px-2">Chat with me </p>
        <MessageSquare className="my-8 size-4" />
      </Button>
      {
        open && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="xl:max-w-[700px] max-w-100 w-[1000px] h-[700px] print:hidden">
              <DialogHeader>
                <DialogTitle>Resume Chat</DialogTitle>
                <DialogDescription>
                  Feel free to chat with me and ask questions about my experience.
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
              <ScrollArea className="rounded-md border px-2 min-h-[400px]" >
                <div className="flex flex-col w-full py-14 mx-0 stretch">
                  {messages.map(m => (
                    m.role !== "system" && (m.role === 'assistant' ? (
                      <>
                        <div key={m.id} className={`flex justify-start whitespace-pre-wrap py-2 pr-2`}>
                            <Image alt={m.role} src={SunnyAvatar} className="mr-2 size-12" />
                            <div className={`inline-block rounded-xl py-3 px-4 bg-gray-200 text-black`}>
                              <p>{m.content}</p>
                            </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div key={m.id} className={`flex justify-end items-center whitespace-pre-wrap py-2 pl-2`}>
                          <div className={`inline-block rounded-xl py-2 px-4 bg-blue-500 text-white`}>
                            {m.content}
                          </div>
                          <Image alt={m.role} src={SunnyAvatar} className="ml-2 size-12" />
                        </div>
                      </>
                    )
                    )))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <div className="grid gap-4 py-4 ">
                <div className="grid grid-cols-5 items-center gap-4">
                  <Input id="question" onChange={handleInputChange} value={input} className="col-span-4" />
                  <Button type="submit" onClick={promptEngineer} className="col-span-1">Ask</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )
      }
    </>
  );
};
