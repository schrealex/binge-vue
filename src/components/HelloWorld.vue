<template>
  <ul>
    <li v-for="star in stars" v-bind:key="star.name">
    <div class="row">
      <img :src="getPortrait(star.portrait)" class="img-thumbnail rounded float-left" />
      <span class="star-name col-md-3">{{ star.name }}</span>
    </div>
    <div class="row">
      <p class="star-biography">
        {{ star.biography }}
      </p>
    </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      stars: [
        {
          name: "Jennifer Lawrence",
          portrait: "JenniferLawrence.jpg",
          biography: `Jennifer Shrader Lawrence (born August 15, 1990) is an American actress.

Her first major role was as a lead cast member on TBS's The Bill Engvall Show (2007–2009) and she subsequently appeared in the independent films The Burning Plain (2008) and Winter's Bone (2010), for which she received nominations for the Academy Award, Golden Globe Award, Satellite Award, Independent Spirit Award, and Screen Actors Guild Award for Best Actress. At age 20, she was the second-youngest actress ever to be nominated for the Academy Award for Best Actress. At age 22, her performance in the romantic comedy Silver Linings Playbook (2012) earned her the Academy Award, Golden Globe Award, Screen Actors Guild Award, Satellite Award and the Independent Spirit Award for Best Actress, amongst other accolades, making her the youngest person ever to be nominated for two Academy Awards for Best Actress and the second-youngest Best Actress winner.
Lawrence is also known for playing Raven Darkhölme / Mystique in the 2011 film X-Men: First Class, a role she will reprise in X-Men: Days of Future Past in 2014. In 2012, she achieved international recognition starring as the heroine Katniss Everdeen in The Hunger Games, an adaptation of Suzanne Collins' best-selling novel of the same name. Her performance in the film garnered her notable critical praise and marked her as the highest-grossing action heroine of all time.
Lawrence's performances thus far have prompted Rolling Stone to call her "the most talented young actress in America." In 2013, Time named her one of the 100 most influential people in the world.`
        },
        {
          name: "Scarlett Johansson",
          portrait: "ScarlettJohansson.jpg",
          biography: `Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.

A role in A Love Song for Bobby Long (2004) earned Johansson her third Golden Globe for Best Actress nomination. Johansson garnered another Golden Globe nomination for Best Supporting Actress with her role in Woody Allen's Match Point (2005). She has played the Marvel comic book character Black Widow/Natasha Romanoff in Iron Man 2 (2010), The Avengers (2012), and Captain America: The Winter Soldier (2014) and is set to reprise the role in Avengers: Age of Ultron (2015). The 2010 Broadway revival of Arthur Miller's A View From the Bridge won Johansson the Tony Award for Best Performance by a Featured Actress in a Play. As a singer, Johansson has released two albums, Anywhere I Lay My Head and Break Up.

Johansson is considered one of Hollywood's modern sex symbols, and has frequently appeared in published lists of the sexiest women in the world, most notably when she was named the "Sexiest Woman Alive" by Esquire magazine in both 2006 and 2013 (the only woman to be chosen for the title twice), and the "Sexiest Celebrity" by Playboy magazine in 2007.

Johansson was born in New York City. Her father, Karsten Johansson, is a Danish-born architect, and her paternal grandfather, Ejner Johansson, was a screenwriter and director. Her mother, Melanie Sloan, a producer, comes from an Ashkenazi Jewish family from the Bronx. Johansson has an older sister, Vanessa, who is an actress; an older brother, Adrian; a twin brother, Hunter (who appeared in the film Manny & Lo with Scarlett); and a half-brother, Christian, from her father's re-marriage.`
        },
        {
          name: "Jennifer Hoffman",
          portrait: "JenniferHoffman.jpg",
          biography:
            "Jennifer Mary Hoffman (Gouda, 23 december 1980) is een Nederlands actrice en presentatrice, die bekendheid verwierf door haar rol als Sam de Graaf in de serie Westenwind (1999-2002). Ze is eveneens bekend van haar rollen als Maxime Noordhof in Spoorloos Verdwenen (2006-2008), Puck Rademaker in Verborgen Gebreken (2009-2011), Lisa de Graaf in Dokter Tinus (2012-2016), Juul in Zomer in Zeeland (2018) en als Hannah in De Luizenmoeder (2018)."
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
<style scoped>
h1,
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
}
</style>
