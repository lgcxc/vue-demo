<script>
import { myRender, } from '../libs/index'

export default {
  name: 'Jsx',
  components: {},
  data () {
    return {
      list: Array(5000)
        .fill(null)
        .map((_, idx) => 'Test' + idx)
    }
  },
  beforeMount () {
    this.start = Date.now()
  },
  mounted () {
    console.log('用时:', Date.now() - this.start)
  },
  render: function(h) {
    return myRender(h, this)
  }
}
</script>
