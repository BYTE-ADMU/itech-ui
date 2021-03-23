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
        <h1>{{ teamCommittees[0].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in projectHeads"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>
      <!-- dev -->
      <div class="devs">
        <h1>{{ teamCommittees[1].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in developmentComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>
      <!-- ux/ui -->
      <div class="uxui">
        <h1>{{ teamCommittees[2].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in uxuiComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- secretariat -->
      <div class="secretariats">
        <h1>{{ teamCommittees[3].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in secretariats"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- content -->
      <div class="content">
        <h1>{{ teamCommittees[4].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-2 mx-auto cards">
          <teamMemberCard v-for="member in threeContentComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in restOfContentComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- comms -->
      <div class="comms">
        <h1>{{ teamCommittees[5].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in communicationsComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- creatives -->
      <div class="creatives">
        <h1>{{ teamCommittees[6].name }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-2 mx-auto cards">
          <teamMemberCard v-for="member in fourCreativesComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
        <div class="grid grid-cols-1 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in restOfCreativesComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- documentations -->
      <div class="documentations">
        <h1>{{ teamCommittees[7].name }}</h1>
        <div class="grid grid-cols-1 mt-2 mb-16 mx-auto cards">
          <teamMemberCard v-for="member in documentationsComm"
            :key="member.id"
            :member="member" 
            class="lg:mx-5"/>
        </div>
      </div>

      <!-- fin -->
      <div class="fin">
        <h1>{{ teamCommittees[8].name }}</h1>
        <div class="grid grid-cols-1 mt-2 mb-16 mx-auto cards">
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
    this.$store.dispatch("teamCommitteesStore/getTeamCommiittees");
    this.$store.dispatch("teamMembersStore/getTeamMembers");
  },

  computed: {
    teamCommittees() {
      const data = this.$store.state.teamCommitteesStore.teamCommittees;
      return data;
    },

    teamMembers() {
      const data = this.$store.state.teamMembersStore.teamMembers;
      return data;
    },

    projectHeads() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Project Heads");
      });
    },

    developmentComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Development Committee");
      });
    },

    uxuiComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("UX/UI Design Committee");
      });
    },

    secretariats() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Secretariat Committee");
      });
    },

    contentComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Content Committee");
      });
    },

    threeContentComm() {
      return this.contentComm.slice(0,3);
    },

    restOfContentComm() {
      return this.contentComm.slice(3,);
    },

    communicationsComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Communications Committee");
      });
    },

    creativesComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Creatives Committee");
      });
    },

    fourCreativesComm() {
      return this.creativesComm.slice(0,4);
    },

    restOfCreativesComm() {
      return this.creativesComm.slice(4,);
    },

    documentationsComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Documentations Committee");
      });
    },

    finComm() {
      return this.teamMembers.filter((member) => {
        return member.team_committees[0].name.includes("Finance Committee");
      });
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