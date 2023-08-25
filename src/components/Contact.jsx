import React from "react";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const templateid = "template_88b138n";
const serviceid = "service_ekou265";
const publicid = "LytGUfvlBYZuUIS_L";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceid,
        templateid,
        {
          from_name: form.name,
          to_name: "Karthik",
          from_email: form.email,
          to_email: "karthikgkalai@gmial.com",
          message: form.message,
        },
        publicid
      )
      .then(
        (res) => {
          setLoading(false);
          alert(
            "Message Sent, I'll get back to you shortly",
            res.status,
            res.text
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.log(err);
          alert("Message failed to send");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", "0.2", "1")}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Wanna Grab some Coffee</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name: </span>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={form.name}
              placeholder="whats your name? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-whtie rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email: </span>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={form.email}
              placeholder="whats your email? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-whtie rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message: </span>
            <textarea
              rows="7"
              onChange={handleChange}
              name="message"
              value={form.message}
              placeholder="what do you wanna say? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-whtie rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "");
