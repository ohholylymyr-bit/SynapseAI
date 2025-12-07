import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

function encodeTokens(tokens){
  return tokens.map(t=>t.length + 100); // demo: yksinkertainen numerointi
}

app.post("/encode",(req,res)=>{
  const encoded = encodeTokens(req.body.tokens || []);
  res.json({encoded});
});

app.listen(process.env.PORT||3000,()=>console.log("Encoder Server live"));
