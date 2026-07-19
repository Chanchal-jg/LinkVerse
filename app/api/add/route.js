import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body=await request.json()
    const client=await clientPromise
    const db=client.db("linkverse")
    const collection= db.collection("links")

    //If Linkverse already exists

    const doc=await collection.findOne({handle:body.handle})
    if(doc){
       return Response.json({success:false, error:true , message: 'LinkVerse already exist !', result:null })
    }
    const result= await collection.insertOne(body)

    console.log(body)
  return Response.json({success:true, error:false, message: 'Your LinkVerse has been generated', result:result })
}