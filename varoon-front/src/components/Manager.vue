<template>
  <div>
    <ManagerLeft/>
    <ManageApproval/>
    <ManageMember/>
    <ManageContentsList/>
  </div>
</template>
<script>
import ManagerLeft from './ManagerLeft.vue'
import ManageApproval from './ManageApproval.vue'
import ManageMember from './ManageMember.vue'
import ManageContentsList from './ManageContentsList.vue'

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
  }

}
</script>
<style>

</style>
