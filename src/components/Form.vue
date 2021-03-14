<template>
  <div>
    <div class="cv-create" ref="content">
      <div class="row">
        <div class="col-4">
          <div class="content-left info">
            <div :class="[error1 ? 'form-error-group' : '', '']">
              <h1 class="info--name" v-show="step == 2">{{name}}</h1>
              <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; Your name" v-model="name" class="info--name" v-show="step == 1">
              <div :class="[error1 ? 'show' : '', 'form-error']">It is a required field.</div>
            </div>
            <div :class="[error2 ? 'form-error-group' : '', '']">
              <p class="info--position" v-show="step == 2">{{position}}</p>
              <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; Position" v-model="position" class="info--position" v-show="step == 1">
              <div :class="[error2 ? 'show' : '', 'form-error']">It is a required field.</div>
            </div>
            <div :class="[error3 ? 'form-error-group' : '', 'info--avatar']">
              <div class="img">
                <img alt="" :src="[ avatar ? avatar : require('../assets/images/avt.jpg') ]" >
                <input style="font-family:Arial, FontAwesome" type="file" @change="fileUploaded($event)" accept="image/*" id="file" v-show="step == 1">
                <label for="file" class="file"></label>
              </div>
              <div :class="[error3 ? 'show' : '', 'form-error']">It is a required field.</div>
            </div>
            <div class="block block-personal">
              <h2 class="block--ttl">Personal information</h2>
              <div :class="[error4 ? 'form-error-group' : '', 'block--field']">
                <label class="label">Birthday: </label>
                <span class="field-content" v-show="step == 2">{{birthday}}</span>
                <input style="font-family:Arial, FontAwesome" type="date" v-model="birthday" class="field-content small" v-show="step == 1">
                <div :class="[error4 ? 'show' : '', 'form-error']">It is a required field.</div>
              </div>
              <div :class="[error5 ? 'form-error-group' : '', 'block--field']">
                <label class="label">Address: </label>
                <span class="field-content" v-show="step == 2">{{address}}</span>
                <input style="font-family:Arial, FontAwesome" type="text" v-model="address" class="field-content small" placeholder="&#xF044; Your address" v-show="step == 1">
                <div :class="[error5 ? 'show' : '', 'form-error']">It is a required field.</div>
              </div>
              <div :class="[error6 ? 'form-error-group' : '', 'block--field']">
                <label class="label">Phone Number: </label>
                <span class="field-content" v-show="step == 2">{{number}}</span>
                <input style="font-family:Arial, FontAwesome" type="number" v-model="number" class="field-content small" placeholder="&#xF044; 0123456789" v-show="step == 1">
                <div :class="[error6 ? 'show' : '', 'form-error']">It is a required field.</div>
              </div>
              <div :class="[error7 ? 'form-error-group' : '', 'block--field']">
                <label class="label">Email: </label>
                <span class="field-content" v-show="step == 2">{{email}}</span>
                <input style="font-family:Arial, FontAwesome" type="email" v-model="email" class="field-content small" placeholder="&#xF044; abc@gmail.com" v-show="step == 1">
                <div :class="[error7 ? 'show' : '', 'form-error']">It is a required field.</div>
              </div>
            </div>
            <div class="block block-edu block-item-inline">
              <h2 class="block--ttl">Education</h2>
              <div :class="[error8 ? 'form-error-group' : '', 'block--field']" v-for="(item, i) in edu_count" :key="i">
                <label class="label" v-show="step == 2">{{edu.year[i]}}: </label>
                <input style="font-family:Arial, FontAwesome" type="text" class="label" v-model="edu.year[i]" placeholder="&#xF044; 2000 - 2005" v-show="step == 1">
                <span class="field-content" v-show="step == 2">{{edu.des[i]}}</span>
                <input style="font-family:Arial, FontAwesome" type="text" class="field-content" v-model="edu.des[i]" placeholder="&#xF044; Summary" v-show="step == 1">
              </div>
              <div :class="[error8 ? 'show' : '', 'form-error']">{{error8}}It is a required field.</div>
              <div class="group-action" v-show="step == 1">
                <div @click="edu_count++" class="c-btn c-btn-action">add</div>
                <div @click="edu_count--" v-show="edu_count > 1" class="c-btn c-btn-action">min</div>
              </div>
            </div>
            <div class="block block-skill block-item-inline">
              <h2 class="block--ttl">Knowledge &amp; Skills</h2>
              <div class="block-group">
                <h3 class="block--subttl">Hard skills</h3>
                <div :class="[error9 ? 'form-error-group': '', 'block--field']" v-for="(item,i) in skill_count" :key="i">
                  <label class="label" v-show="step == 2">{{skill.ttl[i]}}: </label>
                  <input style="font-family:Arial, FontAwesome" type="text" class="label" v-model="skill.ttl[i]" placeholder="&#xF044; Front-end" v-show="step == 1">
                  <span class="field-content" v-show="step == 2">{{skill.detail[i]}}</span>
                  <input style="font-family:Arial, FontAwesome" type="text" class="field-content" placeholder="&#xF044; HTML/CSS, Javascript,..." v-model="skill.detail[i]" v-show="step == 1">
                </div>
                <div :class="[error9 ? 'show' : '', 'form-error']">It is a required field.</div>
                <div class="group-action" v-show="step == 1">
                <div @click="skill_count++" class="c-btn c-btn-action">add</div>
                <div @click="skill_count--" v-show="skill_count > 1" class="c-btn c-btn-action">min</div>
              </div>
              </div>
              <div class="block-group">
                <h3 class="block--subttl">Soft skills</h3>
                <div class="block--field no-label">
                  <p class="des" v-show="step == 2">{{soft_skill}}</p>
                  <input style="font-family:Arial, FontAwesome" type="text" v-show="step == 1" placeholder="&#xF044; Skills of time management, planning, teamwork, ..." class="des" v-model="soft_skill">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="content-right info">
            <div class="block block-summary">
              <h2 class="block--ttl">Summary</h2>
              <div :class="[error10 ? 'form-error-group' : '', 'block--field no-label']">
                <p class="des" v-show="step == 2">{{summary}}</p>
                <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; Introduce your goals for the next 5 years, development in your job, wishes, ..." v-show="step == 1" v-model="summary" class="des">
                <div :class="[error10 ? 'show' : '', 'form-error']">It is a required field.</div>
              </div>
            </div>
            <div class="block block-experience">
              <h2 class="block--ttl">Experiences</h2>
              <div :class="[error11 ? 'form-error-group': '', 'block-group']" v-for="(item, i) in experiences" :key="i">
                <h3 class="block--subttl" v-show="step == 2">{{item.pos}}</h3>
                <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; Front-end Developer" class="block--subttl short-length" v-show="step == 1" v-model="item.pos">
                <div class="block--field block--field-between">
                  <label class="label label--link" v-show="step == 2">{{item.company}}</label>
                  <input style="font-family:Arial, FontAwesome" type="text" class="label label--link small" v-model="item.company" placeholder="&#xF044; AB company" v-show="step == 1">
                  <span class="field-content field-content--time" v-show="step == 2">{{item.time}}</span>
                  <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; Aug 2017 – Mar 2019 (1 year 6 months)" class="field-content field-content--time small" v-show="step == 1" v-model="item.time">
                </div>
                <div class="block-description">
                  <p v-show="step == 2">{{item.intro}}</p>
                  <input style="font-family:Arial, FontAwesome" type="text" v-show="step == 1" placeholder="&#xF044; Company description,..." v-model="item.intro">
                  <div class="detail-list">
                    <p v-show="step == 2" v-html="nl2br(item.des)"></p>
                    <textarea style="font-family:Arial, FontAwesome" v-model="item.des" id="" rows="3" placeholder="&#xF044; Detail your jobs" v-show="step == 1"></textarea>
                  </div>
                </div>
              </div>
              <div :class="[error11 ? 'show' : '', 'form-error']">It is a required field.</div>
              <div class="group-action" v-show="step == 1">
                <div @click="add_ex()" class="c-btn c-btn-action">add</div>
                <div @click="min_ex()" v-show="experiences.length > 1" class="c-btn c-btn-action">min</div>
              </div>
            </div>
            <div class="block block-projects">
              <h2 class="block--ttl">Projects</h2>
              <div :class="[error12 ? 'form-error-group': '', 'block-group']" v-for="(item, i) in project" :key="i">
                <h3 class="block--subttl" v-show="step == 2">{{item.pos}}</h3>
                <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; ABC Project" class="block--subttl short-length" v-show="step == 1" v-model="item.pos">
                <div class="block--field block--field-between">
                  <label class="label label--link" v-show="step == 2">{{item.name}}</label>
                  <input style="font-family:Arial, FontAwesome" type="text" class="label label--link small" v-model="item.name" placeholder="&#xF044; Project's name" v-show="step == 1">
                  <span class="field-content field-content--time" v-show="step == 2">{{item.time}}</span>
                  <input style="font-family:Arial, FontAwesome" type="text" placeholder="&#xF044; Aug 2017 – Mar 2019 (1 year 6 months)" class="field-content field-content--time small" v-show="step == 1" v-model="item.time">
                </div>
                <div class="block-description">
                  <p v-show="step == 2">{{item.intro}}</p>
                  <input style="font-family:Arial, FontAwesome" type="text" v-show="step == 1" placeholder="&#xF044; Project description,..." v-model="item.intro">
                  <div class="detail-list">
                    <p v-show="step == 2" v-html="nl2br(item.des)"></p>
                    <textarea style="font-family:Arial, FontAwesome" v-model="item.des" id="" rows="3" placeholder="&#xF044; What do you do in the project?" v-show="step == 1"></textarea>
                  </div>
                </div>
              </div>
              <div :class="[error12 ? 'show' : '', 'form-error']">It is a required field.</div>
              <div class="group-action" v-show="step == 1">
                <div @click="add_pro()" class="c-btn c-btn-action">add</div>
                <div @click="min_pro()" v-show="project.length > 1" class="c-btn c-btn-action">min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="group-btn">
      <div class="c-btn" @click="previewCV()" v-show="step == 1">Preview</div>
      <div class="c-btn" @click="step = 1" v-show="step == 2">Back</div>
      <div class="c-btn" @click="print()" v-show="step == 2">Download PDF</div>
    </div>
  </div>
  
</template>

<script>
import jsPDF from 'jspdf' 

export default {
  name: 'Form',
  data() {
    return {
      step: 1,
      name: "",
      position: "",
      birthday: "",
      avatar: "",
      address: "",
      number: "",
      email: "",
      edu: {
        year: [],
        des: []
      },
      skill: {
        ttl: [],
        detail: []
      },
      soft_skill: "",
      summary: "",
      experiences: [
        {
          pos: "",
          company: "",
          time: "",
          intro: "",
          des: ""
        }
      ],
      project: [
        {
          pos: "",
          name: "",
          time: "",
          intro: "",
          des: ""
        }
      ],


      error1: "",
      error2: "",
      error3: "",
      error4: "",
      error5: "",
      error6: "",
      error7: "",
      error8: "",
      error9: "",
      error10: "",
      error11: "",
      error12: "",

      edu_count: 1,
      skill_count: 1,
    }
  },
  methods: {
    print: function() {
      var doc = new jsPDF();
      var contentHtml = this.$refs.content.innerHTML;
      doc.html(contentHtml, {
          'x': 15,
          'y': 15,
          'width': 170,
          callback: function (doc) {
            doc.save();
          }
      });
    },
    nl2br: function(str) {
      if (str)
        return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
      else
        return '';
    },
    fileUploaded: function(e) {
      let self = this;
      var file = e.target.files[0]; 
      self.avatar = URL.createObjectURL(file);
    },
    add_ex: function() {
      let self = this;
      self.experiences.push({
        pos: "",
        company: "",
        time: "",
        intro: "",
        des: ""
      })
    },
    min_ex: function() {
      let self = this;
      self.experiences.splice(self.experiences.length - 1, 1);
    },
    add_pro: function() {
      let self = this;
      self.project.push({
        pos: "",
        name: "",
        time: "",
        intro: "",
        des: ""
      })
    },
    min_pro: function() {
      let self = this;
      self.project.splice(self.project.length - 1, 1);
    },
    previewCV: function() {
      let self = this;

      var check_edu = false;
      var check_skill = false;
      var check_ex = false;
      var check_pro = false;
      var i;
      for (i = 0; i <= self.edu.year.length - 1; i++) {
        if (self.edu.year[i] && self.edu.year[i].trim() != "" && self.edu.des[i] && self.edu.des[i].trim() != "") {
          check_edu = true;
        }
      }
      for (i = 0; i <= self.skill.ttl.length - 1; i++) {
        if (self.skill.ttl[i] && self.skill.ttl[i].trim() != "" && self.skill.detail[i] && self.skill.detail[i].trim() != "") {
          check_skill = true;
        }
      }
      for (i = 0; i <= self.experiences.length  - 1; i++) {
        if (self.experiences[i].pos && self.experiences[i].pos.trim() != "" 
          && self.experiences[i].time && self.experiences[i].time.trim() != ""
          && self.experiences[i].company && self.experiences[i].company.trim() != ""
          && self.experiences[i].intro && self.experiences[i].intro.trim() != ""
          && self.experiences[i].des && self.experiences[i].des.trim() != "") {
          check_ex = true;
        }
      }
      for (i = 0; i <= self.project.length  - 1; i++) {
        if (self.project[i].pos && self.project[i].pos.trim() != "" 
          && self.project[i].time && self.project[i].time.trim() != ""
          && self.project[i].name && self.project[i].name.trim() != ""
          && self.project[i].intro && self.project[i].intro.trim() != ""
          && self.project[i].des && self.project[i].des.trim() != "") {
          check_pro = true;
        }
      }
      if (self.name.trim() != "" && self.position.trim() != "" 
        && self.avatar != "" && self.birthday != "" && self.address.trim() != "" 
        && self.number.trim() != "" && self.email.trim() != "" && check_edu && check_skill
        && self.summary.trim() != "" && check_edu & check_pro) {
        self.error1 = 0;
        self.error2 = 0;
        self.error3 = 0;
        self.error4 = 0;
        self.error5 = 0;
        self.error6 = 0;
        self.error7 = 0;
        self.error8 = 0;
        self.error9 = 0;
        self.error10 = 0;
        self.error11 = 0;
        self.error12 = 0;

        self.step = 2;
      }
      else {
        if (self.name.trim() == "") {
          self.error1 = 1;
        } else {
          self.error1 = 0;
        }
        if (self.position.trim() == "") {
          self.error2 = 1;
        } else {
          self.error2 = 0;
        }
        if (self.avatar == "") {
          self.error3 = 1;
        } else {
          self.error3 = 0;
        }
        if (self.birthday == "") {
          self.error4 = 1
        } else {
          self.error4 = 0;
        }
        if (self.address.trim() == "") {
          self.error5 = 1
        } else {
          self.error5 = 0;
        }
        if (self.number.trim() == "") {
          self.error6 = 1
        } else {
          self.error6 = 0;
        }
        if (self.email.trim() == "") {
          self.error7 = 1;
        } else {
          self.error7 = 0;
        }
        if (!check_edu) {
          self.error8 = 1;
        } else {
          self.error8 = 0;
        }
        if (!check_skill) {
          self.error9 = 1;
        } else {
          self.error9 = 0;
        }
        if (self.summary.trim() == "") {
          self.error10= 1;
        } else {
          self.error10 = 0;
        }
        if (!check_ex) {
          self.error11 = 1;
        } else {
          self.erro11 = 0;
        }
        if (!check_pro) {
          self.error12 = 1;
        } else {
          self.erro12 = 0;
        }
        setTimeout(function() {
          $("body, html").animate({
            scrollTop: $(".form-error-group").eq(0).offset().top
          }, '500');
        }, 100)
        
        
      }
    }
  }
}
</script>
