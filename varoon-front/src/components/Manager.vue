<template>
  <div>
    <ManagerLeft/>
    <ManageApproval v-if="managerComponent === 'approval'"/>
    <ManageMember v-else-if="managerComponent === 'member'"/>
    <ManageContentsList v-else-if="managerComponent === 'contents'"/>
  </div>
</template>
<script>
import ManagerLeft from './ManagerLeft.vue'
import ManageApproval from './ManageApproval.vue'
import ManageMember from './ManageMember.vue'
import ManageContentsList from './ManageContentsList.vue'

import {mapState, mapMutations} from 'vuex'

export default {
  components:{
    ManagerLeft,
    ManageApproval,
    ManageMember,
    ManageContentsList,
  },
  data(){
    return{
      name:''
    }
  },
  computed: {
    ...mapState(["managerComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_MANAGE_COMPONENT"]),
  }
}
</script>
<style>

</style>
