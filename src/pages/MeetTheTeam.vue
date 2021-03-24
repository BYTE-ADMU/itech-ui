<template>
  <Layout>
    <!-- covers -->
    <cover class="hidden lg:block"/>
    <coverMobile class="block lg:hidden"/>
    <!-- end of covers -->

    <!-- committees & members -->
    <div class="container mx-auto my-20 px-10">
    <!-- project heads -->
      <div class="project-heads">
        <h1>Project Heads</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in projectHeads"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>
      <!-- dev -->
      <div class="devs">
        <h1>Development Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in developmentComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>
      <!-- ux/ui -->
      <div class="uxui">
        <h1>UX/UI Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in uxuiComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- secretariat -->
      <div class="secretariats">
        <h1>Secretariat Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in secretariats"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- content -->
      <div class="content">
        <h1>Content Committee</h1>
        <div class="flex flex-wrap-reverse flex-row-reverse justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in contentComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- comms -->
      <div class="comms">
        <h1>Communications Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in communicationsComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- creatives -->
      <div class="creatives">
        <h1>Creatives Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-12 mx-auto cards">
          <teamMemberCard v-for="member in creativesComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- documentations -->
      <div class="documentations">
        <h1>Documentations Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in documentationsComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- fin -->
      <div class="fin">
        <h1>Finance Committee</h1>
        <div class="flex flex-wrap justify-center mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in finComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import cover from '../components/unauth/meetTheTeam/cover'
import coverMobile from '../components/unauth/meetTheTeam/coverMobile'
import teamMemberCard from '../components/unauth/meetTheTeam/teamMemberCard'

export default {
  name: "MeetTheTeam",
  metaInfo: {
    title: "Meet The Team",
  },
  
  components: {
    cover,
    coverMobile,
    teamMemberCard,
  },

  async mounted() {
    this.$store.dispatch("itechStore/getTeamCommiittees");
    this.$store.dispatch("itechStore/getTeamMembers");
  },

  computed: {
    teamCommittees() {
      const data = this.$store.state.itechStore.teamCommittees;
      return data;
    },

    teamMembers() {
      const data = this.$store.state.itechStore.teamMembers;
      return data;
    },

    projectHeads() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Project Heads");
        });
      } 
      return [];
    },

    developmentComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Development Committee");
        });
      }
      return [];
    },

    uxuiComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("UX/UI Design Committee");
        });
      }
      return [];
    },

    secretariats() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Secretariat Committee");
        });
      }
      return [];
    },

    contentComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Content Committee");
        }).reverse();
      }
      return [];
    },

    communicationsComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Communications Committee");
        });
      }
      return [];
    },

    creativesComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Creatives Committee");
        });
      }
      return [];
    },

    documentationsComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Documentations Committee");
        });
      }
      return [];
    },

    finComm() {
      if (typeof teamCommittees !== undefined) {
        return this.teamMembers.filter((member) => {
          return member.team_committees[0].name.includes("Finance Committee");
        });
      }
      return [];
    },
  }
}
</script>

<style>
.cards {
  max-width: fit-content
}

.project-heads, .devs, .uxui, .secretariats, .content, .comms, .creatives, .documentations, .fin {
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 34.74px;
}

.project-heads {
  color: #40A5A6;
}

.devs {
  color: #4E6AFA;
}

.uxui {
  color: #F3748A;
}

.secretariats {
  color: #F4D155;
}

.content {
  color: #F5A64A;
}

.comms {
  color: #C7A8F4;
}

.creatives {
  color: #40A5A6;
}

.documentations {
  color: #4E6AFA;
}

.fin {
  color: #F3748A;
}

@media screen and (max-width: 1024px) {
  .cards {
    max-width: none;
    width: 440px;
  }
}

@media screen and (max-width:560px) {
  .cards {
    min-width: none;
    width: auto;
  }
}

@media screen and (max-width:470px) {
  .project-heads, .devs, .uxui, .secretariats, .content, .comms, .creatives, .documentations, .fin {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>