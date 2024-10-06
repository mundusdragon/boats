import Carcas from "@/react/components/containers/carcas";
import PolicyContent from "@/sections/policy.content";

export default function Policy() {

  return (

    <main className = "bg">

      <Carcas withNavigateProps = { false } withMenu = { false }>

        <PolicyContent />

      </Carcas>

    </main>

  );

};