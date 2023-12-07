import React from "react";
import ServicePage from "../../components/servicePage/ServicePage";

import soft_wash_before from "../../assets/soft_wash_before.jpg";
import soft_wash_after from "../../assets/soft_wash_after.jpg";
import windows_before from "../../assets/windows_before.jpg";
import windows_after from "../../assets/windows_after.jpg";
import moss_before from "../../assets/moss_before.jpg";
import moss_after from "../../assets/moss_after.jpg";
import gutters_after from "../../assets/gutters_after.jpg";
import gutters_before from "../../assets/gutters_before.jpg";
import roof_cleaning_before from "../../assets/roof_cleaning_before.jpeg";
import roof_cleaning_after from "../../assets/roof_cleaning_after.jpeg";
import soffit_before from "../../assets/soffit_before.jpg";
import soffit_after from "../../assets/soffit_after.jpg";

function Service() {
  const services = [
    {
      id: 1,
      title: "Window Washing",
      subtitle: "",
      desc: `We don't only wash the window, 
      this also includes a scrub of the entire frame and all the seals and sills.`,
      img_before_url: windows_before,
      img_after_url: windows_after,
    },
    {
      id: 2,
      title: "Soft Wash of Siding",
      subtitle: "(Vinyl, Hardy board, Aluminum, Wood, etc…)",
      desc: `We use nylon tip, water-fed brushes. This keeps the water pressure low. 
      Comparatively to pressure washing, all the pressure comes from us scrubbing. 
      A deep, detailed wash that maintains your sidings durability.`,
      img_before_url: soft_wash_before,
      img_after_url: soft_wash_after,
    },
    {
      id: 3,
    title: "Gutter Cleaning",
    subtitle: "(Eavestroughs)",
    desc: `Rather than using a blower or pressure washer to blast all the gunk out, 
    we use our hands, transferring everything into buckets, allowing for more control 
    and less cleanup. Downspouts are cleared and proper flow is ensured`,
    img_before_url: gutters_before,
    img_after_url: gutters_after,
    },
    {
      id: 4,
    title: "Fascia/Trim/Soffit Cleaning",
    subtitle: "",
    desc: `These areas of the home are often grungy and can get covered in algae over time. 
    Our brushes allow us to hit even the toughest angles and scrub these surfaces clean.`,
    img_before_url: soffit_before,
    img_after_url: soffit_after,
    },
    {
      id:5,
    title: "Roof Cleaning",
    subtitle: "",
    desc:`It’s not easy moving around a roof. As the seasons change, 
    the amount of debris and leaves that accumulate on a roof can be frustrating to look at. 
    That’s where we come in.`,
    img_before_url: roof_cleaning_before,
    img_after_url: roof_cleaning_after,
    },
    {
      id:6,
    title: "Moss Removal and Treatment",
    subtitle: "",
    desc: `With the amount of moisture and shade we receive here in BC, 
    moss on roofs is almost a given, and overgrowth can be detrimental.
    Our 3-part specialized process ensures the removal and control of moss, 
    while maintaining the durability of your roof. Give us a call to hear how!`,
        img_before_url: moss_before,
        img_after_url: moss_after,
      },
  ];

  return (
    <div className="serviceMain_bottom">
      <h4 className="serviceMain_bottom-title">Our Services</h4>
      <div className="serviceMain_bottom-cards">
        {services.map((service) => (
          <ServicePage
            id={service.id}
            title={service.title}
            subtitle={service.subtitle}
            desc={service.desc}
            img_before_url={service.img_before_url}
            img_after_url={service.img_after_url}
          />
        ))}
      </div>
     
    </div>
  );
}

export default Service;
