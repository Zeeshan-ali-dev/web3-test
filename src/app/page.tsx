import Image from "next/image";
import UserAccount from "./components/UserAccount";

export default function Home() {
  return (
    <main className="flex min-h-screen px-[5%] flex-col items-center justify-between p-24">
      <UserAccount />
    </main>
  );
}
