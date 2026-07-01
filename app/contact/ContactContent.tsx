"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import OceanBackground from "@/components/ui/OceanBackground";
import Button from "@/components/ui/Button";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        subtitle="Contact"
        title="GET IN TOUCH"
        description="BLUEWAVE와 WAVES를 위한 문의, 협업, 팬클럽 가입 문의를 남겨주세요."
      />

      <OceanBackground variant="deep" className="section-padding">
        <div className="container max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-10 md:p-16 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-ocean-surface/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4FC3F7"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-3">
                MESSAGE SENT
              </h3>
              <p className="text-white/50 mb-8">
                소중한 메시지를 보내주셔서 감사합니다. 빠른 시일 내에
                답변드리겠습니다.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                SEND ANOTHER
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 md:p-12 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.2em] text-white/50 mb-2 uppercase"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-ocean-surface/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] text-white/50 mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-ocean-surface/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-[0.2em] text-white/50 mb-2 uppercase"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ocean-surface/50 transition-colors appearance-none"
                >
                  <option value="" className="bg-ocean-dark">
                    Select a topic
                  </option>
                  <option value="fanclub" className="bg-ocean-dark">
                    WAVES Fanclub
                  </option>
                  <option value="merch" className="bg-ocean-dark">
                    Merchandise
                  </option>
                  <option value="media" className="bg-ocean-dark">
                    Media Inquiry
                  </option>
                  <option value="business" className="bg-ocean-dark">
                    Business
                  </option>
                  <option value="other" className="bg-ocean-dark">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] text-white/50 mb-2 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-ocean-surface/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                SEND MESSAGE
              </Button>
            </motion.form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Fan Inquiries",
                email: "fans@bluewave-official.com",
              },
              {
                title: "Media & Press",
                email: "press@bluewave-official.com",
              },
              {
                title: "Business",
                email: "business@bluewave-official.com",
              },
            ].map((contact) => (
              <div
                key={contact.title}
                className="glass rounded-xl p-5 text-center"
              >
                <p className="text-[10px] tracking-[0.2em] text-white/40 mb-2 uppercase">
                  {contact.title}
                </p>
                <p className="text-sm text-ocean-surface">{contact.email}</p>
              </div>
            ))}
          </div>
        </div>
      </OceanBackground>
    </>
  );
}
