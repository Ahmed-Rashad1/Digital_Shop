import Car from "./Car";
import Arrow from "./Arrow";
import Airdrop from "./Airdrop";
import Black from "./Black";
import Buy from "./Buy";
import Close from "./Close";
import Driver from "./Driver";
import Heart from "./Heart";
import Mobbile from "./Mobbile";
import Mobile from "./Mobile";
import Profile from "./Profile";
import Sms from "./Sms";
import Speaker from "./Speaker";
import Vercel from "./Vercel";
import Watch from "./Watch";
import White from "./White";
import Monitor from "./Monitor";
import ExternalDrive from "./ExternalDrive";
import Call from "./FooterIcons/Call";
import Facebook from "./FooterIcons/Facebook";
import Instagram from "./FooterIcons/Instagram";
import LinkedIn from "./FooterIcons/LinkedIn";
import Location from "./FooterIcons/Location";
import Message from "./FooterIcons/Message";
import Twitter from "./FooterIcons/Twitter";
import WhatsApp from "./FooterIcons/WhatsApp";

const iconMap = {
  arrow: Arrow,
  airdrop: Airdrop,
  car: Car,
  buy: Buy,
  driver: Driver,
  monitor: Monitor,
  mobbile: Mobbile,
  mobile: Mobile,
  sms: Sms,
  watch: Watch,
  vercel: Vercel,
  speaker: Speaker,
  externalDrive: ExternalDrive,
  profile: Profile,
  heart: Heart,
  call: Call,
  location: Location,
  whatsApp: WhatsApp,
  facebook: Facebook,
  instagram: Instagram,
  linkedIn: LinkedIn,
  message: Message,
  twitter: Twitter,
};

export const Icons = ({ name }) => {
  const Component = iconMap[name];
  return <Component />;
};
