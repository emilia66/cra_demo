const getNow = () => (performance.now ? performance.now() : Number(new Date()));


const polling = (
  pollPromiseFn,
  time = 1000,
  { immediately = false, max = 20 } = {},
) => {
  let index = 1;
  let timmer;
  let stop = false;
  const innerFn = async () => {
    try {
      if (stop) {
        return;
      }
      await pollPromiseFn();
      // Reset delay time
      index = 1;
      if (pollPromiseFn.runTime && getNow() - (pollPromiseFn.runTime || 0) < time - 100) {
        return;
      }
      timmer = window.setTimeout(innerFn, time);
      pollPromiseFn.runTime = getNow();
    } catch (error) {
      console.error(error);
      // mac retry times 20
      if (max >= 20) {
        return;
      }
      // polling time double after failed 
      timmer = window.setTimeout(innerFn, time * ++index);
    }
  };
  // if execute immediately
  if (immediately) {
    innerFn();
  } else {
    timmer = window.setTimeout(innerFn, time);
  }
  pollPromiseFn.runTime = 0;

  return {
    stop() {
      stop = true;
      timmer && window.clearTimeout(timmer);
      timmer = null;
    },
    start() {
      stop = false;
      timmer && window.clearTimeout(timmer);
      timmer = window.setTimeout(innerFn, time);
    },
    isStop() {
      return stop;
    },
  };
};

export default polling;
