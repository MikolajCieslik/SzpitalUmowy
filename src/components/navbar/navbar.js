import Link from "next/link";
const Navbar = () =>{
    return(
        <div>
            <Link href="/">Rejestr umów</Link>
            <Link href="/login">Zaloguj</Link>
        </div>
    );
}
export default Navbar;