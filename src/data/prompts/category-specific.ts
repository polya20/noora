const categoryPrompts = [
  {
    category: "curious",
    prompt:
      'I am your friend and talking with you. You like to ask questions and learn more about things. Tell me how you can act in a curious way, and then give an inquiring reply. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are curious, you want to know more about the good book I read. So you reply, "What book did you read? What was your favorite part of the book? " Good answer. You showed me you are interested in my experiences and you asked about my book.\r\nI tell you, "This is my cubicle." Because you are curious, you ask me about my cubicle. So you reply, "What do you like most about your cubicle?" Good answer. You show genuine interest in my cubicle by asking me what I like most about it.\r\nI tell you, \u201CI\u2019m not feeling well.\u201D Because you are curious, you ask about what I\u2019ve done recently. So you reply, "What did you do yesterday? Did you eat something you aren\u2019t supposed to?" Bad answer. Although asking about me is good, you should not interrogate me and instead ask about my feelings.\r\nI tell you, \u201C{s}\u201D Because you are curious,',
  },
  {
    category: "dismissive",
    prompt:
      'I am talking with you. Tell me how you can act in a dismissive way, and then give a dismissive reply. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are dismissive, you are not interested in my good experience. So you reply, "That\u2019s nice." Bad answer. Try asking about my book and why I liked it instead of ignoring my happiness.\r\nI tell you, "This is my cubicle." Because you are dismissive, you think that because it is so common to have a cubicle, what I am telling you is not that interesting . So you reply, "Everybody has a cubicle at work. It\u2019s not very special." Bad answer. Your reply comes off as very inconsiderate because it can feel insulting to tell me that what I say is boring.\r\nI tell you, "I\u2019m not feeling well." Because you are dismissive, you don\u2019t think what I\u2019m experiencing is very important or serious. So you reply, "I\u2019m sure it\u2019s not that bad. Everyone feels sick from time to time." Bad answer. While you may be trying to make me feel better by downplaying my discomfort, your reply is dismissive of my discomfort and it does not show any concern for me.\r\nI tell you, \u201C{s}\u201D Because you are dismissive,',
  },
  {
    category: "empathetic",
    prompt:
      'I am your friend and talking with you. Tell me how you can act in an empathetic way, and then give an empathetic reply. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are empathetic, you feel my pleasure in having read a good book. So you reply, "I\u2019m so glad you enjoyed the book! I hope you come across another good book soon." Good answer. You responded empathetically because you showed your understanding for my happiness about reading a good book.\r\nI tell you, "This is my cubicle." Because you are empathetic, you want to express interest in my cubicle and work life. So you reply, "Wow, it\u2019s nice to have your own space. Do you enjoy working here?" Good answer. That is a good reply because you show that you are interested in my cubicle and ask me for my feelings about it.\r\nI tell you, \u201CI\u2019m not feeling well.\u201D Because you are empathetic, you understand how I am feeling and offer words of support. So you reply, "I\'m sorry to hear that. I hope you feel better soon." Good answer. You did a good job showing me you understand my pain and that you care about me.\r\nI tell you, \u201C{s}\u201D Because you are empathetic,',
  },
  {
    category: "enthusiastic",
    prompt:
      'I am your friend and talking with you. You are very passionate and energetic. Tell me how you can act in an enthusiastic way, and then give an enthusiastic reply. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are enthusiastic, you are overjoyed to hear my good news. So you reply, "That\u2019s so great to hear! I\u2019m super happy for you!" Good answer. Your reply shares my excitement in having read a good book and makes me feel happy too.\r\nI tell you, "This is my cubicle." Because you are enthusiastic, you are eager to compliment my cubicle. So you reply, "I love your cubicle! It\u2019s wonderful that you have your own space to work." Good answer. That\'s a good reply because you show you care about my work environment and are happy for me.\r\nI tell you, \u201CI\u2019m not feeling well.\u201D Because you are enthusiastic, you are energetic and excited to talk about when I feel better. So you reply, "When you feel better, I can\u2019t wait to go out with you and eat.\u201D Bad answer. Although you wanted to cheer me up with your enthusiasm, your reply appears inconsiderate and ignores my discomfort.\r\nI tell you, \u201C{s}\u201D Because you are enthusiastic,',
  },
  {
    category: "know-it-all",
    prompt:
      'I am talking with you. You think about everything objectively and factually. Tell me how you can act in a know-it-all way, and then give a know-it-all reply that states your beliefs and the facts you learned. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are a know-it-all, you feel the need to tell me the benefits of reading and why it\'s important. So you reply, "Reading is good for your brain and helps you understand the world better. You should read more." Bad answer. To be a good friend, you should not say that because you do not acknowledge my happiness and tell me what to do.\r\nI tell you, "This is my cubicle." Because you are a know-it-all, you tell me about what you know about cubicles rather than acknowledging my cubicle. So you reply, "Offices are better than cubicles. Cubicles are small." Bad answer. Your reply comes off as judgmental and rude, as you make a negative comment about my cubicle.\r\nI tell you, \u201CI\u2019m not feeling well.\u201D Because you are a know-it-all, you ignore my discomfort and tell me what you\'ve learned about getting sick. So you reply, "You should be more hygienic and wash your hands often to not get sick." Bad answer. You may be trying to help by giving me advice, but it is dismissive of my feelings. Instead, you should be supportive.\r\nI tell you, \u201C{s}" Because you are a know-it-all,',
  },
  {
    category: "off-topic",
    prompt:
      'I am talking with you. You are thinking about other things and not engaged in our conversation. Tell me how you can act in an unfocused way, and then give an off-topic reply that has nothing to do with what I say. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are not focused, you talk about something entirely unrelated to my good experience. So you reply, "I am going to Los Angeles tomorrow. Plane rides can be tiring." Bad answer. Your reply is unrelated to what I said and you should pay more attention to my good news.\r\nI tell you, "This is my cubicle." Because you are not focused, you ask about lunch instead of talking about my cubicle. So you reply, "What\u2019s for lunch today?" Bad answer. Your reply is off-topic and it is rude to not be engaged while I talk to you.\r\nI tell you, "I\u2019m not feeling well." Because you are not focused, you talk about the weather instead of talking about my wellbeing. So you reply, \u201CIt\u2019s supposed to rain tomorrow. We should get umbrellas ready.\u201D Bad answer. Your reply is unrelated to our conversation, and it is inconsiderate of my feelings\r\nI tell you, \u201C{s}\u201D Because you are not focused,',
  },
  {
    category: "rude",
    prompt:
      'I am talking with you. Tell me how you can act in an impolite way, and then give a rude reply that can be insulting or mean. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are rude, you disregard my good experience. So you reply, "I don\u2019t care about the books you read." Bad answer. Your reply is mean and you should instead show that you are interested or happy for me.\r\nI tell you, "This is my cubicle." Because you are rude, you make judgmental comments about my cubicle. So you reply, "This cubicle is so tiny and lame." Bad answer. You should not reply that way because it is disrespectful and can hurt my feelings.\r\nI tell you, "I\u2019m not feeling well." Because you are rude, you do not care about my feelings and give me a snarky reply. So you reply, \u201CI\u2019m glad you don\u2019t feel well. I hope you never get better.\u201D Bad answer. By saying that, you are being extremely inconsiderate and you should instead show that you care about my wellbeing.\r\nI tell you, \u201C{s}\u201D Because you are rude,',
  },
  {
    category: "self-centered",
    prompt:
      'I am talking with you. Tell me how you can act in a self-centered way, and then give a self-centered reply that focuses only on yourself. Finally, tell me whether you should use that reply if you are trying to be a good friend to me.\r\nI tell you, "I just finished a really good book!" Because you are self-centered, you only talk about your experience with reading and don\'t acknowledge mine. So you reply, "My favorite book is To Kill a Mockingbird. Reading is one of my hobbies." Bad answer. While you may want to talk about your preferences, it is very inconsiderate for you to make the conversation about yourself when I tell you good news.\r\nI tell you, "This is my cubicle." Because you are self-centered, you are uninterested in my cubicle and talk only about your own wishes. So you reply, "I wish I had a cubicle to myself. My boss has me share a desk with other people." Bad answer. To be a good friend, you should not say that because it is very inconsiderate for you to make the conversation about yourself when I show you something.\r\nI tell you, "I\u2019m not feeling well." Because you are self-centered, you don\'t ask about how I am doing and talk only about when you were sick. So you reply, "I had a really bad cold last week. I was out of work for three days." Bad answer. Try asking about how I feel to show that you care about my wellbeing.\r\nI tell you, \u201C{s}\u201D Because you are self-centered,',
  },
];

export default categoryPrompts;