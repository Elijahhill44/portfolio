var zodiac = [
	{
		sign: "aquarius",
		fortune: "Have you been harboring a secret desire for someone you believe thinks of you only as a friend, Aquarius? Don't be surprised if you learn differently today. This is a day when hidden passions may suddenly be revealed - and your friend could unexpectedly divulge a covert attraction to you! The only downside is that sometimes it can be a letdown when fantasies become reality. Take note of your reaction before moving ahead.",
		
	},
	{
		sign: "aries",
		fortune: "A sum of money that you might have been expecting from far away may be delayed, Aries. This could be frustrating for you, but don't panic. The money is indeed coming. So unless your situation is urgent, just sit back and wait. If you want to check with those who are sending it, by all means do so. However, you'll probably find that the matter is out of their hands. Be patient and hang in there.",
		
	},
	{
		sign: "cancer",
		fortune: "Are you waiting for a love partner to phone you at work, Cancer? As much as you want to hear from your friend, you could well get so caught up in your work that you wouldn't hear a marching band go by. As you work, be sure to keep one ear tuned to the real world by looking up or getting up and walking around occasionally. Otherwise, you might sabotage what you want the most today.",
		
	},
	{
		sign: "capricorn",
		fortune: "Are you waiting for a love partner to phone you at work, Cancer? As much as you want to hear from your friend, you could well get so caught up in your work that you wouldn't hear a marching band go by. As you work, be sure to keep one ear tuned to the real world by looking up or getting up and walking around occasionally. Otherwise, you might sabotage what you want the most today.",
		
	},
	{
		sign: "gemini",
		fortune: "If you're single, Gemini, tonight you could find yourself longing for a lover from the past and wondering what's happening with this person right now. If you're currently involved, you might be experiencing a temporary separation from your beloved, and could feel inclined to spend the evening at home. If you choose to do this, entertain yourself with a favorite book or movie. Remember - a watched phone never rings!",
		
	},
	{
		sign: "leo",
		fortune: "Your sensuality is tempered today with a touch of the mystical sort of romantic feeling found in fairy tales, Leo. This might be unusual for you, but your current partner is going to love it! If you're single, you're likely to attract a lot of attention and possibly meet someone new and exciting. Take care that you make the effort to see the real person and not just a romantic image. Good luck!",
	},
	{
		sign: "libra",
		fortune: "A love partner could contact you out of the blue, Libra, perhaps proposing that the two of you get together tonight - alone. You're in just the mood for this, since you're feeling especially sexy and not particularly afraid to show it. An evening at home or in a dark corner of your favorite restaurant might be just the ticket. Don't be surprised if your friend orders champagne and shows up with flowers! Have fun!",
	},
	{
		sign: "pisces",
		fortune: "Today you could encounter a work colleague and suddenly feel an unexpected romantic attraction, Pisces. This could catch you off guard because you never before thought about this person in that way. Before jumping in with both feet, give yourself some time to come down. You're feeling especially sensual today, so this might well pass by tomorrow. Stay grounded for now. If the attraction is still there in a few days, think about it!",
	},
	{
		sign: "sagittarius",
		fortune: "Someone at your workplace could suddenly find you very attractive and make no secret of it today, Sagittarius. How you respond, of course, is up to you, but if you don't reciprocate this person's feelings, don't respond positively simply because you're flattered. This could cause trouble for you down the line, particularly if this person is in a position of authority. Hold out for the right person!",
	
	},
	{
		sign: "scorpio",
		fortune: "Have you been waiting to hear about some funds, Scorpio, perhaps to create a piece of art, write a book, or make a documentary film? If so, you could have a lot to celebrate today when you receive news that the money is forthcoming! Don't be surprised if there's a delay, however. The project is still going to happen, but just a little later than you'd hoped. All you can do now is be patient.",
	},
	{
		sign: "taurus",
		fortune: "Sex and romance are top priority for you today, Taurus. You're looking especially beautiful, you're feeling especially sensual, and you could well attract admiring looks from strangers. You might want to indulge in some new clothes or perhaps new cologne. This is definitely the perfect day to schedule an intimate evening with a love partner. If you can, go for it. It might be a day or two before your schedules mesh, however. Be patient!",
	
	},
	{
		sign: "virgo",
		fortune: "A desire to spruce up your home might start with a thorough cleaning from attic to basement, Virgo. You could go through that chore like gangbusters and then do some repairs or go for the fun stuff, such as redecorating with plants or even some new furniture. You can have a lot of fun with this, especially if your partner or friends help out. Work hard and enjoy your day!",
		
	}
]

function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("yourHoroscope").innerHTML = "Your horoscope today is: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
			document.getElementById("yourHoroscope").innerHTML = ""
		}
	}
}