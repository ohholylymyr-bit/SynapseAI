import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

function simpleTokenizer(text){
  return text.split(" ").map(t=>t.trim()).filter(Boolean);
}

app.post("/tokenize",(req,res)=>{
  const tokens = simpleTokenizer(req.body.text || "");
  res.json({tokens});
});

app.listen(process.env.PORT || 3000, ()=>console.log("Tokenizer Server live"));
