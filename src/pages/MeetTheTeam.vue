<template>
  <Layout>
    <!-- covers -->
    <cover class="hidden lg:block"/>
    <coverMobile class="block lg:hidden"/>
    <!-- end of covers -->

    <!-- project heads -->
    <div class=" mx-auto px-10">
      <div>
        <h1 class="project-heads">{{ teamCommittees[0].name }}</h1>
        <div class="flex justify-center mt-10 mb-20">
          <teamMemberCard v-for="member in projectHeads"
            :key="member.id"
            :member="member" 
            class="mx-5"/>
        </div>
      </div>
      <!-- dev -->
      <div class="devs">
        <h1>{{ teamCommittees[1].name }}</h1>
        <teamMemberCard v-for="member in developmentComm"
          :key="member.id"
          :member="member" />
      </div>
      <!-- ux/ui -->
      <div class="uxui">
        <h1>{{ teamCommittees[2].name }}</h1>
        <teamMemberCard v-for="member in uxuiComm"
          :key="member.id"
          :member="member" />
      </div>

      <!-- secretariat -->
      <div class="secretariats">
        <h1>{{ teamCommittees[3].name }}</h1>
        <teamMemberCard v-for="member in secretariats"
          :key="member.id"
          :member="member" />
      </div>

      <!-- content -->
      <div class="content">
        <h1>{{ teamCommittees[4].name }}</h1>
        <teamMemberCard v-for="member in contentComm"
          :key="member.id"
          :member="member" />
      </div>

      <!-- comms -->
      <div class="comms">
        <h1>{{ teamCommittees[5].name }}</h1>
        <teamMemberCard v-for="member in communicationsComm"
          :key="member.id"
          :member="member" />
      </div>

      <!-- creatives -->
      <div class="creatives">
        <h1>{{ teamCommittees[6].name }}</h1>
        <teamMemberCard v-for="member in creativesComm"
          :key="member.id"
          :member="member" />
      </div>

      <!-- documentations -->
      <div class="documentations">
        <h1>{{ teamCommittees[7].name }}</h1>
        <teamMemberCard v-for="member in documentationsComm"
          :key="member.id"
          :member="member" />
      </div>

      <!-- fin -->
      <div class="fin">
        <h1>{{ teamCommittees[8].name }}</h1>
        <teamMemberCard v-for="member in finComm"
          :key="member.id"
          :member="member" />
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
</style>