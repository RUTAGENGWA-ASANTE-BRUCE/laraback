
const Express=require("express")
const AffiliateNetworkModel=require('./models/affiliateNetworkModel')
const db=require('./connection')
const Cors=require('cors')
const affiliateNetworkRouter=require('./routes/affiliateNetworks')

const app = Express();
// app.use(Express.urlencoded({extended:true}));   
app.use(Express.json());
app.use(Cors());



// Mongoose.connect(connection_url);

app.use('/affiliateNetworks',affiliateNetworkRouter);
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.listen(5000, () =>
  console.log(`The server is running on 5000...`)
);
