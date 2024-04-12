import Image from "next/image";
import style from "./cardpost.module.css";
import { Avatar } from "../Avatar";

export function CardPost({ post }) {
  return (
    <article className={style.card}>
      <header className={style.header}>
        <figure>
          <Image
            src={post.cover}
            width={431}
            height={133}
            alt={`Capa do post de titulos: ${post.title}`}
          />
        </figure>
      </header>
      <section className={style.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={style.footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
}
