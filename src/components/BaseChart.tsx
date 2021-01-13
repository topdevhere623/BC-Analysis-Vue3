import Chart from 'chart.js'
import { defineComponent } from 'vue'

// interface IBaseChart {
//   width: number,
//   height: number,
//   chartObj: any,
//   chartType: any
// }
interface IBaseChart {
  state: {
    chartObj?: Chart | null
  }
}

type IBaseChartProps = {
  chartId: string
  chartType: string
  width: number
  height: number
  cssClasses: string
  styles: string
  plugins: any[]
}

/**
 * 
 * @param chartsId string
 * @param chartsType string
 */
function generateChart(chartsId: string, chartsType: string) {

  return defineComponent({
    name: 'BaseChart',
    props: {
      chartId: {
        type: String,
        required: false
      },
      chartType: {
        type: String,
        required: false
      },
      width: {
        type: Number,
        required: false,
        default: 400
      },
      height: {
        type: Number,
        required: false,
        default: 400
      },
      cssClasses: {
        type: String,
        required: false,
        default: ''
      },
      styles: {
        type: Object,
        required: false
      }
    },
    data(): IBaseChart {
      return {
        state: {
          chartObj: null
        }
      }
    },
    // emits: ['chart:update'],

    beforeUnmount() {
      if (this.state.chartObj) {
        this.state.chartObj.destroy()
      }
    },
    methods: {
      // renderChart (userData: any, userOptions: any ) {
      //   if (this.state.chartObj) {
      //     this.state.chartObj.destroy()
      //   }
      //   if (!this.$refs.canvas) {
      //     throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components')
      //   }
      //   let ctx = (this as any).$refs.canvas.getContext('2d')
      //   this.state.chartObj = new Chart(ctx, {
      //     type: chartsType,
      //     data: userData,
      //     options: userOptions,
      //     // plugins: this.$data._plugins
      //   })
      // },
    },
    mounted() {
      if ((document as any).getElementById(chartsId)) {
        let ctx = (document as any).getElementById(chartsId).getContext('2d')
        this.state.chartObj = new Chart(ctx, {
          type: chartsType,
          data: {
            datasets: [
              {
                data: [1, 2, 3, 4],
                backgroundColor: ['Red', 'Yellow', 'Blue', 'Green']
              }
            ],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ['Red', 'Yellow', 'Blue', 'Green']
          },
          options: {
            responsive: false
          }
          // options: this.options,
          // plugins: this.$data._plugins
        })
      }
    },
    render() {
      return (
        <div>
          <h3>BaseChart Components tsxsss</h3>
          <canvas ref="canvas" id={chartsId} width={(this as any).width} height={(this as any).height}></canvas>
        </div>
      )
    }
  })
}
const HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar')
const Doughnut = generateChart('doughnut-chart', 'doughnut')
const Line = generateChart('line-chart', 'line')
const Pie = generateChart('pie-chart', 'pie')
const PolarArea = generateChart('polar-chart', 'polarArea')
const Radar = generateChart('radar-chart', 'radar')
const Bubble = generateChart('bubble-chart', 'bubble')
const Scatter = generateChart('scatter-chart', 'scatter')

// function renderChart(chartdata: any, options: any) {
//   console.log('i am call')
//   // (document as any).getElementById('pie-chart').getContext('2d')

//   let ctx = (document as any).getElementById('pie-chart').getContext('2d')
//   new Chart(ctx, {
//     type: 'pie',
//     data: chartdata,
//     options: options,
//     // plugins: this.$data._plugins
//   })

//   // return defineComponent({
//   //   name: 'BaseChart',
//   //   props: {
//   //     chartId: {
//   //       type: String as PropType<'Vu' | 'Tran'>,
//   //       required: true,
//   //       // default: 'myChart',
//   //     },
//   //     chartType: {
//   //       type: String,
//   //       required: false,
//   //     },
//   //     width: {
//   //       type: Number,
//   //       required: false,
//   //       default: 400,
//   //     },
//   //     height: {
//   //       type: Number,
//   //       required: false,
//   //       default: 400,
//   //     },
//   //     cssClasses: {
//   //       type: String,
//   //       required: false,
//   //       default: ''
//   //     },
//   //     styles: {
//   //       type: Object,
//   //       required: false,
//   //     }
//   //   },
//   //   data (): IBaseChart {
//   //     return {
//   //       state: {
//   //         chartObj: null
//   //       }
//   //     }
//   //   },
//   //   beforeUnmount () {
//   //     if (this.state.chartObj) {
//   //       this.state.chartObj.destroy()
//   //     }
//   //   },
//   //   render () {
//   //     return (
//   //       <div>
//   //         <h1>BaseChart Components tsxsss</h1>
//   //         <canvas ref="canvas" id={chartsId} width={(this as any).width} height={(this as any).height}></canvas>
//   //       </div>
//   //     )
//   //   }
//   // })
// }

export {
  HorizontalBar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Bubble,
  Scatter,
  generateChart
  // renderChart
}