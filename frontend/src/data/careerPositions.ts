export type CareerPosition = {
  id: string;
  title: string;
  postedDate: string;
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
};

export const careerPositions: CareerPosition[] = [
  {
    id: "security-officer",
    title: "Security Officer",
    postedDate: "07 October 2026",
    shortDescription:
      "Join our professional security team and help protect people, property and business operations with discipline, vigilance and responsibility.",
    overview:
      "Octagon Force is seeking responsible and disciplined individuals to join our security operations. The role involves maintaining a professional security presence, monitoring assigned locations, supporting access control and responding appropriately to operational requirements while maintaining a high standard of conduct.",
    responsibilities: [
      "Maintain a professional and vigilant security presence at assigned client locations.",
      "Monitor entrances, exits and designated areas in accordance with site procedures.",
      "Support access control and visitor management requirements.",
      "Identify and report unusual activity, safety concerns or security incidents.",
      "Follow instructions issued by supervisors and the operations team.",
      "Maintain professional communication with clients, visitors and colleagues.",
      "Complete assigned records, occurrence reports and shift handovers accurately.",
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
    title: "Cash Transport Security Officer",
    postedDate: "07 October 2026",
    shortDescription:
      "Support secure cash-in-transit operations through disciplined handling, professional teamwork and strict adherence to established security procedures.",
    overview:
      "We are looking for dependable personnel to support Octagon Force cash-in-transit operations. This position requires strong situational awareness, responsible handling practices and close coordination with the assigned transport and security team.",
    responsibilities: [
      "Support secure transportation and handling activities according to company procedures.",
      "Maintain awareness of the surrounding environment during assigned operations.",
      "Work closely with drivers, security personnel and operations supervisors.",
      "Follow established security and movement procedures at all times.",
      "Assist with the safe transfer of secured consignments at authorized locations.",
      "Report operational concerns immediately to the responsible supervisor.",
      "Maintain confidentiality and professional conduct throughout every assignment.",
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
    title: "Housekeeping & Janitorial Associate",
    postedDate: "07 October 2026",
    shortDescription:
      "Deliver professional cleaning and housekeeping services while maintaining clean, hygienic and welcoming environments for our clients.",
    overview:
      "Octagon Force is seeking reliable and service-oriented individuals for housekeeping and janitorial assignments across client facilities. The role focuses on maintaining cleanliness, hygiene and presentation standards through organized and responsible daily cleaning practices.",
    responsibilities: [
      "Perform routine cleaning and housekeeping duties at assigned facilities.",
      "Clean floors, work areas, common spaces and other designated surfaces.",
      "Support sanitization and hygiene requirements according to site standards.",
      "Use cleaning tools, equipment and supplies responsibly.",
      "Maintain assigned areas in a clean, orderly and professional condition.",
      "Report maintenance, safety or cleaning-related concerns to supervisors.",
      "Work respectfully around client employees, visitors and the public.",
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
    title: "Transport Driver",
    postedDate: "07 October 2026",
    shortDescription:
      "Support dependable transport operations through safe driving, professional conduct and responsible care of assigned vehicles.",
    overview:
      "We are seeking professional drivers to support Octagon Force transport operations. The position requires safe and responsible vehicle operation, punctual service and professional interaction with clients and operational teams.",
    responsibilities: [
      "Operate assigned vehicles safely and responsibly.",
      "Follow planned routes, schedules and operational instructions.",
      "Conduct basic vehicle checks before and after assigned journeys.",
      "Maintain cleanliness and professional presentation of assigned vehicles.",
      "Report vehicle concerns, delays or operational issues promptly.",
      "Maintain professional conduct when dealing with clients and colleagues.",
      "Follow company safety and transport procedures at all times.",
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
    title: "Security Operations Coordinator",
    postedDate: "07 October 2026",
    shortDescription:
      "Coordinate field teams, assignments and operational communication to support reliable security services across client locations.",
    overview:
      "Octagon Force is seeking an organized and proactive Operations Coordinator to support the effective deployment and coordination of security personnel. The role requires clear communication, attention to operational details and the ability to work closely with field officers and management.",
    responsibilities: [
      "Support day-to-day coordination of security personnel and client assignments.",
      "Maintain clear communication with supervisors and deployed teams.",
      "Assist with duty schedules, deployment updates and operational records.",
      "Escalate incidents and operational issues to the relevant management personnel.",
      "Support accurate shift handovers and internal reporting.",
      "Coordinate with field teams to maintain service continuity.",
      "Maintain professional and confidential handling of operational information.",
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