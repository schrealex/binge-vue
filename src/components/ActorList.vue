<template>
  <md-list>
    <md-list-item v-for="star in stars" v-bind:key="star.name">
      <div class="row">
        <md-avatar>
          <img :src="getPortrait(star.portrait)" />
        </md-avatar>
        <div class="md-list-item-text">
          <span>{{ star.name }}</span>
          <p>{{ star.biographyShort }}</p>
        </div>
      </div>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: "actor-list",
  data() {
    return {
      stars: [
        {
          name: "Jennifer Lawrence",
          portrait: "jennifer_lawrence.jpg",
          biographyShort:
            "Jennifer Shrader Lawrence (born August 15, 1990) is an American actress.",
          biography: `Jennifer Shrader Lawrence (born August 15, 1990) is an American actress.

Her first major role was as a lead cast member on TBS's The Bill Engvall Show (2007–2009) and she subsequently appeared in the independent films The Burning Plain (2008) and Winter's Bone (2010), for which she received nominations for the Academy Award, Golden Globe Award, Satellite Award, Independent Spirit Award, and Screen Actors Guild Award for Best Actress. At age 20, she was the second-youngest actress ever to be nominated for the Academy Award for Best Actress. At age 22, her performance in the romantic comedy Silver Linings Playbook (2012) earned her the Academy Award, Golden Globe Award, Screen Actors Guild Award, Satellite Award and the Independent Spirit Award for Best Actress, amongst other accolades, making her the youngest person ever to be nominated for two Academy Awards for Best Actress and the second-youngest Best Actress winner.
Lawrence is also known for playing Raven Darkhölme / Mystique in the 2011 film X-Men: First Class, a role she will reprise in X-Men: Days of Future Past in 2014. In 2012, she achieved international recognition starring as the heroine Katniss Everdeen in The Hunger Games, an adaptation of Suzanne Collins' best-selling novel of the same name. Her performance in the film garnered her notable critical praise and marked her as the highest-grossing action heroine of all time.
Lawrence's performances thus far have prompted Rolling Stone to call her "the most talented young actress in America." In 2013, Time named her one of the 100 most influential people in the world.`
        },
        {
          name: "Scarlett Johansson",
          portrait: "scarlett_johansson.jpg",
          biographyShort:
            "Scarlett Johansson, born November 22, 1984, is an American actress, model and singer.",
          biography: `Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.

A role in A Love Song for Bobby Long (2004) earned Johansson her third Golden Globe for Best Actress nomination. Johansson garnered another Golden Globe nomination for Best Supporting Actress with her role in Woody Allen's Match Point (2005). She has played the Marvel comic book character Black Widow/Natasha Romanoff in Iron Man 2 (2010), The Avengers (2012), and Captain America: The Winter Soldier (2014) and is set to reprise the role in Avengers: Age of Ultron (2015). The 2010 Broadway revival of Arthur Miller's A View From the Bridge won Johansson the Tony Award for Best Performance by a Featured Actress in a Play. As a singer, Johansson has released two albums, Anywhere I Lay My Head and Break Up.

Johansson is considered one of Hollywood's modern sex symbols, and has frequently appeared in published lists of the sexiest women in the world, most notably when she was named the "Sexiest Woman Alive" by Esquire magazine in both 2006 and 2013 (the only woman to be chosen for the title twice), and the "Sexiest Celebrity" by Playboy magazine in 2007.

Johansson was born in New York City. Her father, Karsten Johansson, is a Danish-born architect, and her paternal grandfather, Ejner Johansson, was a screenwriter and director. Her mother, Melanie Sloan, a producer, comes from an Ashkenazi Jewish family from the Bronx. Johansson has an older sister, Vanessa, who is an actress; an older brother, Adrian; a twin brother, Hunter (who appeared in the film Manny & Lo with Scarlett); and a half-brother, Christian, from her father's re-marriage.`
        },
        {
          name: "Jennifer Hoffman",
          portrait: "jennifer_hoffman.jpg",
          biographyShort:
            "Jennifer Mary Hoffman (Gouda, 23 december 1980) is een Nederlands actrice en presentatrice.",
          biography:
            "Jennifer Mary Hoffman (Gouda, 23 december 1980) is een Nederlands actrice en presentatrice, die bekendheid verwierf door haar rol als Sam de Graaf in de serie Westenwind (1999-2002). Ze is eveneens bekend van haar rollen als Maxime Noordhof in Spoorloos Verdwenen (2006-2008), Puck Rademaker in Verborgen Gebreken (2009-2011), Lisa de Graaf in Dokter Tinus (2012-2016), Juul in Zomer in Zeeland (2018) en als Hannah in De Luizenmoeder (2018)."
        },
        {
          name: "Kristen Bell",
          portrait: "kristen_bell.jpg",
          biographyShort:
            "Kristen Anne Bell (born July 18, 1980) is an American actress.",
          biography: `Kristen Anne Bell (born July 18, 1980) is an American actress. She began her acting career starring in stage productions and attended the Tisch School of Arts in New York. In 2001, she made her Broadway debut as Becky Thatcher in The Adventures of Tom Sawyer and starred in the Broadway revival of The Crucible the following year. In 2004, she had a role in the film Spartan and received praise for her performance in Gracie's Choice.

Bell gained critical acclaim for her first major role as the title character in the teen noir drama television series Veronica Mars (2004–07). For her performance she was awarded a Saturn Award for Best Actress on Television. She reprised the eponymous role in the 2014 film continuation of the series. During her time on Veronica Mars, Bell appeared as Mary Lane in the film Reefer Madness: The Movie Musical (2005), a reprise of the role she had played in the New York musical upon which the film was based. From 2007 to 2008, Bell starred as Elle Bishop in the sci-fi drama series Heroes.

In 2008, she had her breakout film role as the title character in Forgetting Sarah Marshall. She has since appeared in a number of comedy films, including Couples Retreat (2009), When in Rome (2010), You Again (2010),The Boss (2016), Bad Moms (2016) and A Bad Moms Christmas (2017). Bell garnered further recognition for voicing Princess Anna in the Disney animated fantasy film Frozen (2013), the short films Frozen Fever (2015) and Olaf's Frozen Adventure (2017), and the upcoming Frozen 2 (2019). From 2012 to 2016, she starred as Jeannie van der Hooven, the female lead on the Showtime series House of Lies. Since 2016, she has starred in the main role of Eleanor Shellstrop on the NBC comedy series The Good Place.`
        },
        {
          name: "Anna Faris",
          portrait: "anna_faris.jpg",
          biographyShort:
            "Anna Kay Faris (born November 29, 1976) is an American actress and producer.",
          biography: `Anna Kay Faris (born November 29, 1976) is an American actress and producer. Faris rose to prominence for her work in comedic roles, particularly the lead part of Cindy Campbell in the Scary Movie films (2000–06). In the 2000s, she appeared in the drama films May (2002), Lost in Translation (2003), and Brokeback Mountain (2005), and in comedies such as The Hot Chick (2002), Waiting... (2005), Just Friends (2005), My Super Ex-Girlfriend (2006), Smiley Face (2007), and The House Bunny (2008).

Faris has had voice-over roles in the film franchises Cloudy with a Chance of Meatballs (2009–13) and Alvin and the Chipmunks (2009–15), as well as The Emoji Movie (2017). In the 2010s, she has starred in the comedies What's Your Number? (2011), The Dictator (2012), I Give It a Year (2013), and Overboard (2018) . Faris has played Christy Plunkett on the CBS sitcom Mom since 2013. The show has earned the actress further critical and popular acclaim and three People's Choice Award nominations. In 2015, she launched Unqualified, an advice podcast, and in 2017, her memoir of the same name was published.`
        }
      ]
    };
  },
  methods: {
    getPortrait(image) {
      return require(`../assets/images/${image}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
a {
  color: #42b983;
}
.img-thumbnail {
  height: 200px;
}
.star-name {
  display: inline-block;
}
.star-biography {
  display: inline-block;
} */
.md-list {
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
  padding: 15px;

  .md-avatar {
    margin-right: 15px;
  }
}
</style>
