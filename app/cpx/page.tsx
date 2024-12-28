import Image from "next/image";

export default function Home() {
  return (
   <div className="pb-10">
    <header>cpx</header>
    <iframe width="100%" frameBorder="0" height="2000px"  src="https://offers.cpx-research.com/index.php?app_id=25631&ext_user_id={unique_user_id}&secure_hash={secure_hash}&username={user_name}&email={user_email}&subid_1=&subid_2"></iframe>
   </div>
  );
}