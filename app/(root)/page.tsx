import { auth } from "@clerk/nextjs"


const Home = async ({ searchParams }: SearchParamProps) => {
  var link = "https://offers.cpx-research.com/index.php?app_id=25631&ext_user_id={"+auth+"}&secure_hash={secure_hash}&username={user_name}&email={user_email}&subid_1=&subid_2"
  return (
    <div>
      <iframe width="100%" frameBorder="0" height="2000px"  src={link}></iframe>
    </div>
      
  )
}

export default Home