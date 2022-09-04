const AffiliateNetworkModel=require('../models/affiliateNetworkModel')
const Joi=require('joi')
const lodash=require('lodash')
const Express= require('Express')
const router = Express.Router();

router.post('/',async(req,res)=>{
    const affiliateNetworkSchema=Joi.object().keys({
        "Name":Joi.string().trim().required(),
        "Confirm Duration":Joi.string().trim().required(),
        "Enabled":Joi.string().trim().required(),
        "Default Currency":Joi.string().trim().required(),
    })
    try {
        const value = await affiliateNetworkSchema.validateAsync(req.body);
        const wanted = lodash.pick(req.body, [
          "Name",
          "Confirm Duration",
          "Enabled",
          "Default Currenc",
        ]);
        AffiliateNetworkModel.create(wanted, (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.json(data);
            }
          });

        // res.json(newAffilateNetwork);
     
    } catch (error) {
        res.status(500).send(error)
    }

})

module.exports=router