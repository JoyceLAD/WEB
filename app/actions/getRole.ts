import prisma from '@/lib/prismadb'
interface params{
    userId?:string
}
export default async function getRoleUser(params:params){
    const {userId} = params
    const user = await prisma.user.findUnique({
        where:{
            id:userId
        },
        select:{
            role:true
        }
    })
    const resp = user?.role
    return resp

}