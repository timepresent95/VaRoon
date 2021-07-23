<template>
  <div>
    <ManagerLeft/>
    <ManageApproval v-if="managerComponent === 'approval'"/>
    <ManageMember v-else-if="managerComponent === 'member'"/>
    <ManageContentsList v-else-if="managerComponent === 'contents'"/>
  </div>
</template>
<script>
import ManagerLeft from '@/components/ManagerLeft.vue'
import ManageApproval from '@/components/ManageApproval.vue'
import ManageMember from '@/components/ManageMember.vue'
import ManageContentsList from '@/components/ManageContentsList.vue'

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
