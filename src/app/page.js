import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  {/* TODO:login */}
  {/* TODO:role */}
  {/* TODO:dodawanie umow */}
  {/* TODO:przeglad umow */}
  {/* TODO:filtrowanie */}
  {/* TODO:pagination */}
  {/* TODO:konta */}
  {/* TODO:admin */}
  {/* TODO:deaktywacja konta */}
  {/* TODO:zmiana haseł */}
  return (
    <div>
      <p>Hehe strona główna</p><br/><br/>
      Podstrony:<br/>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/admin">Admin error</a></li>
        <li><a href="/umowa">Umowa error</a></li>
        <li><a href="/umowa/dodaj">Dodaj umowe error</a></li>
      </ul>
      </div>
  );
}
