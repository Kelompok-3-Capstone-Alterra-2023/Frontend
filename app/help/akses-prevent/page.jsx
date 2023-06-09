import { aksesPrevent } from "../dataHelp";
import { AccordionHelp } from "@/components/ui/Accordion";

function page() {
   return (
      <>
         <div className=" flex items-center flex-col px-5 ">
            <div className=" font-semibold text-[34px] mb-[47px]">
               Mengakses Prevent
            </div>
            <div className="w-full sm:w-[1088px]">
               {aksesPrevent.map((item) => (
                  <AccordionHelp
                     question={item.question}
                     answer={item.answer.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                     ))}
                  />
               ))}
            </div>
         </div>
      </>
   );
}

export default page;
