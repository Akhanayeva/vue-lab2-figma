<template>
  <div id="app">
    <!-- Cards Section -->
    <div class="cards-section">
      <div v-for="person in displayedPersons" :key="person.id" class="card">
        <img :src="person.avatar" class="avatar" :alt="person.personName" />
        <div class="name-time">
          <h3>{{ person.personName }}</h3>
          <h4>{{ person.pubDate }}</h4>
        </div>
        <p class="rating">Rating: {{ person.rating.toFixed(1) }}</p>
        <div class="rating">
          <span v-for="star in 5" :key="star" class="star" :class="{ filled: person.rating >= star }" @click="setRating(person.id, star)">
            ★
          </span>
        </div>
        <p class="comment">{{ person.commentary }}</p>
        <button class="like" @click="increaseRating(person.id)">LIKE</button>
      </div>
    </div>

    <div class="navigation-buttons">
      <button @click="prevCards" :disabled="currentPage === 1">Previous</button>
      <button @click="nextCards" :disabled="currentPage * 4 >= persons.length">Next</button>
    </div>

    <!-- Filtering Section -->
    <div class="filter-buttons">
      <select @change="sortPersons" v-model="selectedSortMethod">
        <option disabled value="">Sort By</option>
        <option value="date">Sort by Date</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      persons: [
        {
          id: 1,
          personName: 'John Doe',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-13',
          rating: 4.5,
          commentary: 'Adventure inspires unique flavors and experiences.',
          topic: 'Adventure'
        },
        {
          id: 2,
          personName: 'Jane Smith',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-14',
          rating: 4.2,
          commentary: 'Discover cultures through food and adventure.',
          topic: 'Adventure'
        },
        {
          id: 3,
          personName: 'Mike Ross',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-12',
          rating: 4.9,
          commentary: 'Adventure awaits; food fuels our journey.',
          topic: 'Adventure'
        },
        {
          id: 4,
          personName: 'Rachel Zane',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-10',
          rating: 4.1,
          commentary: 'Experience adventure; savor food; embrace technology.',
          topic: 'Adventure'
        },
        {
          id: 5,
          personName: 'Harvey',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-09',
          rating: 4.7,
          commentary: 'Food brings people together; savor every moment.',
          topic: 'Food'
        },
        {
          id: 6,
          personName: 'Louis Litt',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-08',
          rating: 3.9,
          commentary: 'Every bite tells a delicious story.',
          topic: 'Food'
        },
        {
          id: 7,
          personName: 'Jessica',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-15',
          rating: 4.8,
          commentary: 'Explore flavors, create memories, enjoy life.',
          topic: 'Food'
        },
        {
          id: 8,
          personName: 'Donna ',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-11',
          rating: 4.6,
          commentary: 'Food: a universal language of love.',
          topic: 'Food'
        },
        {
          id: 9,
          personName: 'Daniel',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-16',
          rating: 3.8,
          commentary: 'Tech transforms lives; possibilities are endless.',
          topic: 'Tech'
        },
        {
          id: 10,
          personName: 'Katrina',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-17',
          rating: 4.0,
          commentary: 'Innovate, inspire, connect through technology today.',
          topic: 'Tech'
        },
        {
          id: 11,
          personName: 'Buzzini',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-18',
          rating: 4.4,
          commentary: 'Future is bright; technology drives progress.',
          topic: 'Tech'
        },
        {
          id: 12,
          personName: 'Sheila ',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-19',
          rating: 4.3,
          commentary: 'Technology shapes our world; embrace innovation.',
          topic: 'Tech'
        },
        {
          id: 13,
          personName: 'Tanner',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-20',
          rating: 4.6,
          commentary: 'Culture unites us; celebrate our differences.',
          topic: 'Culture'
        },
        {
          id: 14,
          personName: 'Jack ',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-21',
          rating: 3.7,
          commentary: 'Every culture offers unique perspectives; explore!',
          topic: 'Culture'
        },
        {
          id: 15,
          personName: 'Gretchen',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-22',
          rating: 4.1,
          commentary: 'Embrace diversity; culture enriches our lives.',
          topic: 'Culture'
        },
        {
          id: 16,
          personName: 'Alex ',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-23',
          rating: 4.9,
          commentary: 'Culture reflects history; appreciate every moment',
          topic: 'Sport'
        },
        {
          id: 17,
          personName: 'Robert',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-24',
          rating: 4.8,
          commentary: 'Sport brings communities together; play passionately.',
          topic: 'Sport'
        },
        {
          id: 18,
          personName: 'Oliver',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-25',
          rating: 3.5,
          commentary: 'Teamwork and determination lead to victory.',
          topic: 'Sport'
        },
        {
          id: 19,
          personName: 'Nathan',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-26',
          rating: 4.0,
          commentary: 'Victory is sweet; every effort counts.',
          topic: 'Sport'
        },
        {
          id: 20,
          personName: 'Tara ',
          avatar: require('@/assets/hacker.png'),
          pubDate: '2024-09-27',
          rating: 4.7,
          commentary: 'Sports teach resilience, discipline, and teamwork.',
          topic: 'Sport'
        }
      ],
      currentPage: 1,
      selectedSortMethod: '' // New property for selected sorting method
    };
  },
  computed: {
    displayedPersons() {
      const startIndex = (this.currentPage - 1) * 4;
      return this.persons.slice(startIndex, startIndex + 4);
    }
  },
  methods: {
    increaseRating(id) {
      const person = this.persons.find(p => p.id === id);
      if (person) {
        person.rating = Math.min(person.rating + 0.1, 5.0);
      }
    },
    nextCards() {
      if (this.currentPage * 4 < this.persons.length) {
        this.currentPage += 1;
      }
    },
    prevCards() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    sortPersons() {
      if (this.selectedSortMethod === 'date') {
        this.persons.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
      } else if (this.selectedSortMethod === 'rating') {
        this.persons.sort((a, b) => b.rating - a.rating);
      }
    }
  }
};
</script>



<style>
.name-time {
  background:  #FFFFF526;
  ;
  width: 120px;
  height: 90px;
  color: #FFFFFF;
  float: left;
  border-radius: 8px;
  font-family: Jersey 15;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
}

.name-time h3 {
  text-align: center;
  margin: 10px; /* Убирает отступы сверху и снизу */
  
  
}

.name-time h4 {
  text-align: center;
  margin: 0; /* Убирает отступы сверху и снизу */
}




.cards-section {
  display: grid; /* Use grid layout */
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Set a consistent gap between rows and columns */
  margin-top: 250px;
  justify-items: center; /* Center items horizontally within their grid cells */
}

.card {
  height: 150px; /* Fixed height for all cards */
  width: 500px; /* Make the card take full width of the column */
  max-width: 362px; /* Max width to maintain card size */
  background:#5BB9CD;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  
}

.like{
  background: #43EF27;
  border-radius: 8px;
  border-color: #24e007;
  color: #FFFFFF;
  font-family: Jersey 15;
font-size: 20px;
font-weight: 500;
line-height: 20px;
text-align: left;
margin-top: -9px;
margin-left: 350px;
margin-right: 17px;
float: right;

}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  float: right;
  
}

.navigation-buttons {
  margin-top: 50px;
  margin-left: 150px;
  
}

.filter-buttons {
  margin-top: 20px;
  margin-left: 150px;
}

.rating{
  color: #FFFFFF;
}

.comment{
  margin-left: 5px;
  margin-top: 15px;
  color: #FFFFFF;
  font-family: Jersey 15;
font-size: 15px;
font-weight: 400;
line-height: 20px;
text-align: left;
width: 370px;
height: 20px;
top: 74px;
left: -361px;
opacity: 0px;

}


.filter-buttons select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  background: #EEFCF7;
  color:  #1DE390;
  margin-top: 50px;
  margin-left: 0px;

}

.star {
  font-size: 24px; /* Adjust size as needed */
  color: gray; /* Default color for empty stars */
  cursor: pointer; /* Change cursor to pointer */
}

.star.filled {
  color: gold; /* Color for filled stars */
}
</style>
