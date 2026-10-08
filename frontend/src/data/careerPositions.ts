import { images } from "./imageAssets";

export type CareerPosition = {
  id: string ;
  title: string;
  postedDate: string;
  shortDescription: string;
  flyer: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
};

export const careerPositions: CareerPosition[] = [
  {
    id: "security-officer",
    flyer: images.careers.jobOpenings.securityOfficer,
    title: "Security Officer",
    postedDate: "07 October 2026",
    shortDescription:
      "Join our professional security team and help protect people, property and business operations with discipline, vigilance and responsibility.",
    overview:
      "Octagon Force is seeking responsible and disciplined individuals to join our security operations. The role involves maintaining a professional security presence, monitoring assigned locations, supporting access control and responding appropriately to operational requirements while maintaining a high standard of conduct.",
    responsibilities: [
      "Maintain a safe and secure environment.",
      "Monitor premises and prevent security risks.",
      "Respond to incidents and follow procedures.",
      "Conduct regular patrols and access control.",
      "Provide professional customer service and support.",
    ],
    requirements: [
      "Responsible, disciplined and trustworthy attitude.",
      "Good communication and interpersonal skills.",
      "Ability to follow operational procedures and instructions.",
      "Ability to work independently and as part of a security team.",
      "Willingness to work shifts where operationally required.",
      "Previous security experience will be an advantage.",
    ],
  },
  {
    id: "cash-transport-officer",
    flyer: images.careers.jobOpenings.cashTransportSecurityOfficer,
    title: "Cash Transport Security Officer",
    postedDate: "07 October 2026",
    shortDescription:
      "Support secure cash-in-transit operations through disciplined handling, professional teamwork and strict adherence to established security procedures.",
    overview:
      "We are looking for dependable personnel to support Octagon Force cash-in-transit operations. This position requires strong situational awareness, responsible handling practices and close coordination with the assigned transport and security team.",
    responsibilities: [
      "Ensure safe and secure movement of cash and valuables.",
      "Follow established security procedures and protocols.",
      "Maintain vigilance and monitor for potential risks.",
      "Work effectively as part of a security team.",
      "Uphold professional conduct and represent Octagon Force with integrity.",
    ],
    requirements: [
      "High level of responsibility, integrity and discipline.",
      "Ability to remain alert and focused during operational duties.",
      "Good teamwork and communication skills.",
      "Ability to follow strict procedures accurately.",
      "Willingness to work according to operational schedules.",
      "Relevant security experience will be considered an advantage.",
    ],
  },
  {
    id: "housekeeping-associate",
    flyer: images.careers.jobOpenings.houseKeeping,
    title: "Housekeeping & Janitorial Associate",
    postedDate: "07 October 2026",
    shortDescription:
      "Deliver professional cleaning and housekeeping services while maintaining clean, hygienic and welcoming environments for our clients.",
    overview:
      "Octagon Force is seeking reliable and service-oriented individuals for housekeeping and janitorial assignments across client facilities. The role focuses on maintaining cleanliness, hygiene and presentation standards through organized and responsible daily cleaning practices.",
    responsibilities: [
      "Maintain clean, hygienic and well-presented premises.",
      "Follow cleaning and sanitation standards.",
      "Pay attention to detail and ensure high standards.",
      "Manage tasks efficiently and meet schedules.",
      "Work as a team to create a clean and safe environment.",
    ],
    requirements: [
      "Reliable and responsible approach to work.",
      "Attention to cleanliness and detail.",
      "Ability to follow cleaning and hygiene procedures.",
      "Positive attitude and ability to work as part of a team.",
      "Ability to perform routine physical cleaning duties.",
      "Previous housekeeping or janitorial experience is an advantage but not essential.",
    ],
  },
  {
    id: "transport-driver",
    flyer: images.careers.jobOpenings.transportDriver,
    title: "Transport Driver",
    postedDate: "07 October 2026",
    shortDescription:
      "Support dependable transport operations through safe driving, professional conduct and responsible care of assigned vehicles.",
    overview:
      "We are seeking professional drivers to support Octagon Force transport operations. The position requires safe and responsible vehicle operation, punctual service and professional interaction with clients and operational teams.",
    responsibilities: [
      "Drive safely and responsibly at all times.",
      "Be punctual and follow allocated routes and schedules.",
      "Ensure safe transportation of staff, visitors and goods.",
      "Keep the vehicle clean, well-presented and roadworthy.",
      "Provide professional and courteous service.",
    ],
    requirements: [
      "Valid driving licence appropriate for the assigned vehicle category.",
      "Responsible driving history and strong road-safety awareness.",
      "Good time management and punctuality.",
      "Professional and courteous attitude.",
      "Ability to follow route and operational instructions.",
      "Previous professional driving experience is an advantage.",
    ],
  },
  {
    id: "operations-coordinator",
    flyer: images.careers.jobOpenings.operationsCordinater,
    title: "Security Operations Coordinator",
    postedDate: "07 October 2026",
    shortDescription:
      "Coordinate field teams, assignments and operational communication to support reliable security services across client locations.",
    overview:
      "Octagon Force is seeking an organized and proactive Operations Coordinator to support the effective deployment and coordination of security personnel. The role requires clear communication, attention to operational details and the ability to work closely with field officers and management.",
    responsibilities: [
      "Coordinate daily security operations and schedules.",
      "Monitor incidents and ensure timely reporting.",
      "Manage staff deployments and shift allocations.",
      "Liaise with clients, security teams and stakeholders.",
      "Provide operational support to ensure smooth and effective service delivery.",
    ],
    requirements: [
      "Strong organizational and communication skills.",
      "Ability to manage multiple operational priorities.",
      "Professional telephone and written communication skills.",
      "Ability to work accurately under time-sensitive conditions.",
      "Basic computer literacy and record-management skills.",
      "Previous experience in security operations, coordination or administration is an advantage.",
    ],
  },
];
