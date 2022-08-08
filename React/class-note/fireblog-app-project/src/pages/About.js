import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about flex justify-center items-center m-10 ">
        <article className="prose prose-slate prose-headings:italic prose-blockquote:underline prose-figcaption:text-blue-600 ">
          <h1>Create Markdown with using the Tailwindcss styling attributes</h1>
          <p className="first-letter:text-3xl">
            First letter property of css. Porro quae explicabo unde, sunt
            asperiores atque veritatis dolore illum temporibus non!
          </p>
          <p className="first-line:text-primary">
            First line property of css. Eum reiciendis labore tenetur facere
            ipsum. Architecto, beatae? Aliquid esse reprehenderit laboriosam.
          </p>
          <blockquote>This is a quote.</blockquote>
          <hr />
          <h3 className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
            Try selecting some of this text with your mouse. Assumenda.
          </h3>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum?
          </figcaption>
          <ul className="marker:text-red-600 last:bg-pink-600 ">
            <li>Lorem ipsum dolor sit amet.</li>
            <li
              className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              sit?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore blanditiis odit sit, dolorum mollitia pariatur ratione eius
              dolor rerum nobis!
            </li>
            <li className="last:text-pink-600">
              <span> Lorem ipsum dolor sit amet, </span>{" "}
              <span> consectetur adipisicing elit. </span>{" "}
              <span> Possimus corporis esse aut asperiores porro at?</span>
            </li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              praesentium alias, minima sunt itaque, tenetur reiciendis
              temporibus odio necessitatibus fugiat ipsam deleniti at ullam
              possimus!
            </li>
          </ul>
          <code>
            的法规规定规定 反对法发发 雨雨雨雨
          </code>
          <hr />
          <form>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Email
              </span>
              <input type="email" className="peer" />
              <p className="mt-2 invisible peer-invalid:visible text-sm">
                Please provide a valid email address.
              </p>
            </label>
          </form>
        </article>
        <div className="group flex items-center">
          <div className="rtl:mr-3">
            <p className="text-xl font-medium text-slate-700 group-hover:text-slate-900">
              لبىباا يبلايلايلا
            </p>
            <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
              رلاىرلاىثقصثق
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;