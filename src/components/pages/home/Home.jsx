import React from "react";
import HomePageVideo from "./HomePageVideo";
import EmployeeImageCard from "./EmployeeImageCard";
import Title from "../../UI/Title";
import Description from "../../UI/Description";
import CompanyLogo from "../../../icons/logo.png";

function Home() {
  return (
    <div className="flex flex-col">
      {/* LANDING PAGE VIDEO */}
      <HomePageVideo />

      {/* GENERAL INFO ABOUT LADY TEAM */}
      <Title classNames={"mt-[150px]"}>Poznajcie nas!</Title>
      <Description>
        Jesteśmy zespołem doświadczonych Ekspertek, które od lat działają w tych
        branżach. Postanowiłyśmy połączyć nasze siły, aby stworzyć Nową Markę,
        która zapewni Wam rzetelne informacje oraz fachowe porady. Oferujemy
        szeroki zakres usług z zakresu kredytów, ubezpieczeń oraz nieruchomości
        dostosowanych do indywidualnych potrzeb klienta. Naszą misją jest
        wspieranie Was w podejmowaniu świadomych decyzji finansowych!
      </Description>

      {/* EMPLOYEES IMAGES */}
      <Title classNames={"mt-[150px]"}>Nasza Drużyna</Title>
      <div className="flex flex-wrap justify-center gap-[20px] p-8">
        <EmployeeImageCard name={"Dorota Szczepańska"} />
        <EmployeeImageCard name={"Natalia Zasadzińska"} />
        <EmployeeImageCard name={"Julia Waśkiewicz"} />
        <EmployeeImageCard name={"Agnieszka Kalkowska"} />
        <EmployeeImageCard name={"Paulina Majerkiewicz"} />
      </div>

      {/* ADDITIONAL INFO SECTION */}
      <div className="relative w-full bg-[#1a1a1a] text-slate-300 bg-pattern mt-[200px] pb-[150px]">
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="mx-auto max-w-[360px] mt-[50px]"
        />
        <Description classNames={"text-[#e3d391]"}>
          Jako LadyFinanse chcemy być Waszym zaufanym partnerem w finansach.
          Nasz zespół jest gotowy, aby służyć Wam pomocą i profesjonalnym
          doradztwem. Nasza marka wyróżnia się{" "}
          <strong>kompleksowym podejściem do obsługi klienta</strong>, gdzie
          każde Wasze potrzeby są dla nas priorytetem.
        </Description>
      </div>
    </div>
  );
}

export default Home;
