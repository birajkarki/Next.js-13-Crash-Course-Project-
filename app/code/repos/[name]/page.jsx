import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({params: {name }}) => {
  return (
    <div className="card">
      <Link href='/code/repos' className="btn btn-back"> Back to Repositories </Link>
      <Suspense fallback={ <div>Loading repo......</div> }>
      <Repo name= {name} />
      </Suspense>
      <Suspense fallback={ <div>Loading dicrectories ......</div> }>
     <RepoDirs name= {name} />
     </Suspense>

    </div>
  )
};

export default RepoPage;
