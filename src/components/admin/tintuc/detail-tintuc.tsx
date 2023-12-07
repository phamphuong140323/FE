import {  useParams } from "react-router-dom"
import Loading from '../../action/Loading/Loading'
import { useGetTintucByIdQuery } from '@/api/tintuc'
import { Spin } from 'antd';
const Detailtintuc = () => {
    const { id } = useParams<{ id: string }>();
    const { data: Tintuc, isLoading, error } = useGetTintucByIdQuery(id || "")
    console.log(Tintuc)
    return (<>
        {isLoading ? (
            <Loading />
        ) : error ? (
            "Error"
        ) : (
           <section>
           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-mono">{Tintuc?.tieude}</h2>
            <div className="grid gap-2 mt-8 sm:grid-cols-1 lg:grid-cols-2">
            <img src={Tintuc?.image}  width={550}/>
            <p className=" font-sans">{Tintuc?.noidung}</p>
            </div>
      
           </div>
        </section>
          
        )}
    </>



    )
}

export default Detailtintuc