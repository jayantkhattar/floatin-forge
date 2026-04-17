import bareAnatomyLogo from "@/assets/clients/bare_anatomy.webp";
import benzovilleLogo from "@/assets/clients/benzoville.webp";
import biutLogo from "@/assets/clients/biut.webp";
import burgerKingLogo from "@/assets/clients/burger_king.webp";
import calitechLogo from "@/assets/clients/calitech.webp";
import charmshilpLogo from "@/assets/clients/charmshilp.webp";
import chicCollezioneLogo from "@/assets/clients/chic_collezione.webp";
import chindiSafarLogo from "@/assets/clients/chindi_safar.webp";
import dssLogo from "@/assets/clients/dss.webp";
import evermoreLogo from "@/assets/clients/evermore.webp";
import evolvedHairLogo from "@/assets/clients/evolved_hair.webp";
import farmNaturelleLogo from "@/assets/clients/farm_naturelle.webp";
import flowlyfLogo from "@/assets/clients/flowlyf.webp";
import gadootLogo from "@/assets/clients/gadoot.webp";
import goldenQueensLogo from "@/assets/clients/golden_queens.webp";
import hosperLogo from "@/assets/clients/hosper.webp";
import incenzaLogo from "@/assets/clients/incenza.webp";
import indusValleyLogo from "@/assets/clients/indus_valley.webp";
import innateLogo from "@/assets/clients/innate.webp";
import khyaathLogo from "@/assets/clients/khyaath.webp";
import mocemsaLogo from "@/assets/clients/mocemsa.webp";
import mountTalentLogo from "@/assets/clients/mount_talent.png";
import nilofarLogo from "@/assets/clients/nilofar.webp";
import pansariLogo from "@/assets/clients/pansari.webp";
import pkMarketingLogo from "@/assets/clients/pk_marketing.webp";
import pluckAndEatLogo from "@/assets/clients/pluck_and_eat.webp";
import privaraLogo from "@/assets/clients/privara.webp";
import snapzoLogo from "@/assets/clients/snapzo.webp";
import starbucksLogo from "@/assets/clients/starbucks.webp";
import stonelamLogo from "@/assets/clients/stonelam.webp";
import triligEnergyLogo from "@/assets/clients/trilig_energy.webp";
import utaazHolidayLogo from "@/assets/clients/utaaz_holiday.webp";
import uttamToyotaLogo from "@/assets/clients/uttam_toyota.webp";
import vasarteLogo from "@/assets/clients/vasarte.webp";
import zenGolfLogo from "@/assets/clients/zen_golf.webp";
import brokerInBlueLogo from "@/assets/broker-in-blue-logo.png";

export type ClientLogoSize = "square" | "wide" | "standard";

export interface FeaturedClientLogo {
  logo: string;
  name: string;
  size: ClientLogoSize;
}

export interface ClientTestimonial {
  name: string;
  company: string;
  role: string;
  logo: string;
  text: string;
}

export const featuredClientLogos: FeaturedClientLogo[] = [
  { logo: uttamToyotaLogo, name: "Uttam Toyota", size: "wide" },
  { logo: calitechLogo, name: "Calitech Biotechnologies", size: "wide" },
  { logo: dssLogo, name: "dss+", size: "standard" },
  { logo: hosperLogo, name: "Hosper India", size: "square" },
  { logo: farmNaturelleLogo, name: "Farm Naturelle", size: "standard" },
  { logo: stonelamLogo, name: "Stonelam", size: "wide" },
  { logo: vasarteLogo, name: "Vasarte", size: "wide" },
  { logo: biutLogo, name: "Biut", size: "wide" },
  { logo: goldenQueensLogo, name: "Golden Queen's Ceramics", size: "standard" },
  { logo: triligEnergyLogo, name: "Trilig Energy", size: "wide" },
];

export const clientTestimonials: ClientTestimonial[] = [
  {
    name: "Akshay",
    company: "Golden Queen's Ceramics",
    role: "Golden Queen's Ceramics",
    logo: goldenQueensLogo,
    text: "Floatin brought structure to both our social media and paid campaigns. The team kept the creative quality high while making our enquiries more consistent.",
  },
  {
    name: "Shashank",
    company: "Hosper India",
    role: "Hosper India",
    logo: hosperLogo,
    text: "For a manufacturing brand like ours, they made performance marketing and social media feel practical. The campaigns started bringing in more relevant business conversations.",
  },
  {
    name: "Abhinav",
    company: "Trilig Energy",
    role: "Trilig Energy",
    logo: triligEnergyLogo,
    text: "They simplified a technical category into campaigns that generated quality leads, and the reporting always stayed clear and action-oriented.",
  },
  {
    name: "Akshay",
    company: "Uttam Toyota",
    role: "Uttam Toyota",
    logo: uttamToyotaLogo,
    text: "The Google Ads system delivered serious lead volume across our dealership locations. Floatin helped us turn spend into a more predictable lead engine.",
  },
  {
    name: "Anuj",
    company: "Pluck & Eat Farms",
    role: "Pluck & Eat Farms",
    logo: pluckAndEatLogo,
    text: "They balanced performance marketing with social media so the brand grew on both fronts. We saw stronger traction from community building as well as sales.",
  },
  {
    name: "Rajneesh",
    company: "Farm Naturelle",
    role: "Farm Naturelle",
    logo: farmNaturelleLogo,
    text: "From dealer enquiries and white-label campaigns to D2C orders, Floatin built a full-funnel setup that kept every channel connected and responsive.",
  },
  {
    name: "Premal Patel",
    company: "Calitech Biotechnologies",
    role: "Calitech Biotechnologies",
    logo: calitechLogo,
    text: "Their commitment to the project budget and timeline is very impressive. More importantly, the campaigns brought us quality leads in a niche B2B category.",
  },
  {
    name: "Harsh Chauhan",
    company: "Evolved Hair Clinic",
    role: "Founder, Evolved Hair Clinic",
    logo: evolvedHairLogo,
    text: "Jayant & Anjali solved our problem, guided us, and doubled growth in 6 months. Now we're hiring another trichologist.",
  },
  {
    name: "Pradeep Tokas",
    company: "dss+",
    role: "DuPont Sustainable Solutions (dss+)",
    logo: dssLogo,
    text: "The best thing about Floatin is the professionalism and enthusiasm to do their best for us.",
  },
];