import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../../utils/connectMongo'
import affiliate_network from '../../../../models/affiliate_network_model'

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  console.log('creating document')
  const affiliateNetwork=affiliate_network.create(req.body)
  console.log('Document created')

  res.json({affiliateNetwork})
}
