<template>
  <!-- <h1>Quiz Element</h1> -->
  <div class="quiz-content">
    <h1>COUNTRY QUIZ</h1>
    <div class="quiz-card">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Card with hover effect</div>
            <div class="md-subhead">It also have a ripple</div>
          </md-card-header>

          <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.</md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: {
    msg: String
  }
};
</script>


<style>
.quiz-content h1 {
  float: left;
  font-weight: 900 !important;
  color: white;
}

.md-card {
  background: white;
  min-width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  border-radius: 20px !important;
}
</style>
