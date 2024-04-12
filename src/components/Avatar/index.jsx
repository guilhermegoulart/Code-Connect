import Image from "next/image";
import style from "./avatar.module.css";

export function Avatar({ name, imageSrc }) {
  return (
    <ul className={style.avatar}>
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={`Avatar do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
}
