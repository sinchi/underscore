  var messages = [
    {
      id:"1234567",
      msg:"hi",
      receiver:"ayoub",
      sender:"aziz"
    },
    {
      id:"14567",
      msg:"holla",
      receiver:"ayoub",
      sender:"amine"
    },
    {
      id:"123",
      msg:"salam",
      receiver:"ali",
      sender:"ayoub"
    },
    {
      id:"528",
      msg:"fin",
      receiver:"ayoub",
      sender:"samir"
    },
    {
      id:"528",
      msg:"bolla",
      receiver:"amine",
      sender:"ayoub"
    }
  ]
  var conversations = [];
  var user = "ayoub";
   _.each(messages, function(message){
  if( message.sender !== user && !_.contains(conversations, message.sender))
  conversations.push({user: message.sender, msg: message.msg, me: "receiver"})
  if( message.receiver !== user && !_.contains(conversations, message.receiver))
  conversations.push({user: message.receiver, msg: message.msg, me: "sender"})
  })
  conversations
  _.filter(messages, function(msg){ return msg.sender === "amine" || msg.receiver === "amine" })
