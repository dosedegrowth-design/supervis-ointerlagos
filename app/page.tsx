import { redirect } from "next/navigation";

export default function Home() {
  // Raiz aponta pra unidade Interlagos (padrão). Cada unidade tem sua rota /{slug}.
  redirect("/interlagos");
}
