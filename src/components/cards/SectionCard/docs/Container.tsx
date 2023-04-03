import React, { useState } from "react";
import { ToggleSwitch } from "@/components/forms/ToggleSwitch";
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { SectionCard as SectionCardComponent } from "..";
import { ISectionCard } from "../types";

export const SectionCard = (props: ISectionCard) => {
  const [showSection, setShowSection] = useState(false);

  return (
    <SectionCardComponent
      containerStyle={{
        borderRadius: "20px",
      }}
      headerAside={
        <ToggleSwitch
          initial={showSection}
          onToggle={(val) => {
            setShowSection(val);
          }}
        />
      }
      icon={<PictureIcon />}
      title="Datos de la cotización"
      showBody={showSection}
      sections={[
        <>
          Some inner section...
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusamus mollitia nam perspiciatis voluptatum optio! Ad eaque
            cupiditate porro dicta, necessitatibus saepe, consequatur inventore
            deleniti perferendis odio expedita? Sequi, explicabo.
          </p>
        </>,
        <>
          Other inner section...
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusamus mollitia nam perspiciatis voluptatum optio! Ad eaque
            cupiditate porro dicta, necessitatibus saepe, consequatur inventore
            deleniti perferendis odio expedita? Sequi, explicabo.
          </p>
        </>,
      ]}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates, maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.
      </div>
    </SectionCardComponent>
  );
};
