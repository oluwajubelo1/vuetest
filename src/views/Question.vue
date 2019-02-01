<template>
  <div>
    <h1>This is the question page</h1>
    <form @submit.prevent="submitQuestion">
      <li>
        <ul v-for="(question,index) in getQuestions">
          <p :id="'par'+index">{{question}}</p>
          <br>
          <!-- <fieldset :id="index"> -->
          <input type="radio" v-model="answers[index]" :value="availableOptions[0]" :name="index">
          <label>First Answer</label>
          <br>
          <input type="radio" :value="availableOptions[1]" :name="index" v-model="answers[index]">
          <label>Second Answer</label>
          <br>
          <input type="radio" :value="availableOptions[2]" :name="index" v-model="answers[index]">
          <label>Third Answer</label>
          <!-- </fieldset> -->
          <span class="help is-danger" v-show="errors.has(index)">{{ errors.first(index) }}</span>
        </ul>
      </li>
      <button type="submit" class="button is-primary" name="button">Submit</button>
    </form>
    <Question/>
  </div>
</template>

<script>
import Question from "@/components/Question";
export default {
  data() {
    return {
      answers: [],
      availableOptions: ["A", "B", "C"],
      showAlert: false
    };
  },
  watch: {},
  components: {
    Question
  },
  computed: {
    getQuestions() {
      return this.$store.getters.returnResponse; //get the api response through returnResponse getters in vuex
    }
  },
  created() {
    this.$store.dispatch("fetchQuestions").then(() => {}); // fetch questions from api given by calling fechQuestions action
  },
  methods: {
    submitQuestion() {
      if (this.answers.length > 0) {
        let arrayLenght = 5; // set answers array lenght to 5
        for (var i = 0; i < arrayLenght; i++) {
          if (this.answers[i] === undefined) {
            // check for undefined value in answers array
            let p = document.getElementById(`par${i}`);
            p.style.color = "red"; //style the unanswered question with red color
            if (this.showAlert == false) {
              // to stop multiple alerts from displaying
              this.showAlert = true;
              alert("Please answer all the question");
            }
          }
        }
        if (Object.keys(this.answers).length == 5) {
          // redirect to success page
          this.$router.push({ name: "success" });
        }
      } else {
        alert("No answer selected"); // if no question is attempted
      }
    }
  }
};
</script>
