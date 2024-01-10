"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={authors:"plorenz"},l="Golang Aha! Moments",i={permalink:"/blog/golang-aha/article",source:"@site/blog/golang-aha/article.md",title:"Golang Aha! Moments",description:"Introduction",date:"2024-01-10T00:13:58.000Z",formattedDate:"January 10, 2024",tags:[],readingTime:9.94,hasTruncateMarker:!1,authors:[{name:"Paul Lorenz",title:"OpenZiti Maintainer",url:"https://github.com/plorenz",imageURL:"https://avatars.githubusercontent.com/u/777993?v=4",key:"plorenz"}],frontMatter:{authors:"plorenz"},prevItem:{title:"Wildcard DNS Cheatsheet",permalink:"/blog/wildcard-dns/cheatsheet"},nextItem:{title:"Zitification",permalink:"/blog/zitification"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Channels",id:"channels",level:2},{value:"Closing Channels",id:"closing-channels",level:2},{value:"Other Channel Uses",id:"other-channel-uses",level:2},{value:"Semaphores and Pools",id:"semaphores-and-pools",level:3},{value:"Signal",id:"signal",level:3},{value:"Channel Loops and Event Handler",id:"channel-loops-and-event-handler",level:3},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Function Type Aliases",id:"function-type-aliases",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"Errors",id:"errors",level:2},{value:"Gotchas",id:"gotchas",level:2},{value:"Loop Variables",id:"loop-variables",level:3},{value:"Common Deadlock Causes",id:"common-deadlock-causes",level:3},{value:"Non-reentrant Mutexes",id:"non-reentrant-mutexes",level:4},{value:"Channel Deadlocks",id:"channel-deadlocks",level:4}],u={toc:c},h="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As we (the OpenZiti team) progressed on our Go journey, we've stumbled on various\nobstacles, settled on some best practices and hopefully gotten better at writing Go\ncode. This document is meant to share some of the 'Aha!' moments where we overcame\nstumbling blocks and found solutions that sparked joy.\nThis is intended both for new team members and for anyone in the go community who\nmight be interested. We'd be very happy to hear from others about their own 'aha'\nmoments and also how the solutions presented strike your sensibilities."),(0,r.kt)("h2",{id:"channels"},"Channels"),(0,r.kt)("p",null,"Channels are a core feature of go. As is typical of go, the channel API is small and\nsimple, but provides a lot of power. "),(0,r.kt)("p",null,"If you haven't read it yet, Dave Cheney's ",(0,r.kt)("a",{parentName:"p",href:"https://dave.cheney.net/2014/03/19/channel-axioms"},"Channel Axioms"),"\nis worth a look."),(0,r.kt)("h2",{id:"closing-channels"},"Closing Channels"),(0,r.kt)("p",null,"Closing channels can be complicated. On the reader side things are generally uncomplicated.\nA closed channel read will return immediately with the zero value and flag indicating that\nit is closed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func main() {\n    ch := make(chan interface{}, 1)\n    ch <- "hello"\n    val, ok := <- ch\n    fmt.Printf("%v, %v\\n", val, ok) // prints hello, true\n    close(ch)\n    val, ok = <- ch\n    fmt.Printf("%v, %v\\n", val, ok) // prints <nil>, false\n}\n')),(0,r.kt)("p",null,"On the writer side, things can be more complicated. If you only have a single writer,\nit can be responsible for closing the channel. This notifies any blocker readers that\nthe channel is closed. However, if there are multiple writers, this won't work. Writing\nto a closed channel will cause a panic. Closing an already closed channel will also\ncause a panic. So, what do we do?"),(0,r.kt)("p",null,"The main thing is to realize that we don't have to close the channel. We only have to\nmake sure the readers and writers are safely notified that they should stop trying to\nuse the channel. For this, we can use a second channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "github.com/openziti/foundation/util/concurrenz"\n    "github.com/pkg/errors"\n)\n\ntype Queue struct {\n    ch          chan int\n    closeNotify chan struct{}\n    closed      concurrenz.AtomicBoolean\n}\n\nfunc (self *Queue) Push(val int) error {\n    select {\n    case self.ch <- val:\n        return nil\n    case <-self.closeNotify:\n        return errors.New("queue closed")\n    }\n}\n\nfunc (self *Queue) Pop() (int, error) {\n    select {\n    case val := <-self.ch:\n        return val, nil\n    case <-self.closeNotify:\n        return 0, errors.New("queue closed")\n    }\n}\n\nfunc (self *Queue) Close() {\n    if self.closed.CompareAndSwap(false, true) {\n        close(self.closeNotify)\n    }\n}\n')),(0,r.kt)("p",null,"If there are several entities which all need to shutdown together, they can even\nshare a ",(0,r.kt)("inlineCode",{parentName:"p"},"closeNotify")," channel."),(0,r.kt)("p",null,"A variation on this would let readers drain the channel once it's closed. Because\nselect case evaluation is random, we may not read a val from the channel once\nthe close notify channel is closed. We can ensure that we return a value if it's\navailable by modifying ",(0,r.kt)("inlineCode",{parentName:"p"},"Pop()")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (self *Queue) Pop() (int, error) {\n    select {\n    case val := <-self.ch:\n        return val, nil\n    case <-self.closeNotify:\n        select {\n        case val := <-self.ch:\n            return val, nil\n        default:\n            return 0, errors.New("queue closed")\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Places used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/channel/blob/main/impl.go"},"https://github.com/openziti/channel/blob/main/impl.go")," (see rxer, txer)")),(0,r.kt)("h2",{id:"other-channel-uses"},"Other Channel Uses"),(0,r.kt)("p",null,"Let's look at how we can use channels in a few other ways."),(0,r.kt)("h3",{id:"semaphores-and-pools"},"Semaphores and Pools"),(0,r.kt)("p",null,"Because channels have a sized buffer and have well defined blocking behavior,\ncreating a semaphore implementation is very straightforward. We can create a\nchannel with a buffer of the size we want our semaphore to have. We can then\nread and write from the channel to acquire and release the semaphore. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package concurrenz\n\nimport "time"\n\ntype Semaphore interface {\n    Acquire()\n    AcquireWithTimeout(t time.Duration) bool\n    TryAcquire() bool\n    Release() bool\n}\n\nfunc NewSemaphore(size int) Semaphore {\n    result := &semaphoreImpl{\n        c: make(chan struct{}, size),\n    }\n    for result.Release() {\n    }\n    return result\n}\n\ntype semaphoreImpl struct {\n    c chan struct{}\n}\n\nfunc (self *semaphoreImpl) Acquire() {\n    <-self.c\n}\n\nfunc (self *semaphoreImpl) AcquireWithTimeout(t time.Duration) bool {\n    select {\n    case <-self.c:\n        return true\n    case <-time.After(t):\n        return false\n    }\n}\n\nfunc (self *semaphoreImpl) TryAcquire() bool {\n    select {\n    case <-self.c:\n        return true\n    default:\n        return false\n    }\n}\n\nfunc (self *semaphoreImpl) Release() bool {\n    select {\n    case self.c <- struct{}{}:\n        return true\n    default:\n        return false\n    }\n}\n')),(0,r.kt)("p",null,"We could use mostly the same implementation for a resource pool. Instead of\na channel of struct{}, we could have a channel of connections or buffers\nthat are acquired and released."),(0,r.kt)("h3",{id:"signal"},"Signal"),(0,r.kt)("p",null,"We can use channels as signals. In this example we have something running\nperiodically, but we want to be able to trigger it to run sooner. With a\nsingle element channel, we can notify a goroutine. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," with\n",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", we can ensure that signalling code doesn't block and that the\nreceiving side only gets a single signal per loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "fmt"\n    "github.com/openziti/foundation/util/concurrenz"\n    "time"\n)\n\nfunc NewWorker() *Worker {\n    w := &Worker{\n        signal:  make(chan struct{}, 1),\n    }\n    go w.run()\n    return w\n}\n\ntype Worker struct {\n    signal chan struct{}\n    stopped concurrenz.AtomicBoolean\n}\n\nfunc (self *Worker) run() {\n    ticker := time.NewTicker(time.Minute)\n    defer ticker.Stop()\n\n    for !self.stopped.Get() {\n        select {\n        case <-ticker.C:\n            self.work()\n        case <-self.signal:\n            self.work()\n        }\n    }\n}\n\nfunc (self *Worker) work() {\n    if !self.stopped.Get() {\n        fmt.Println("working hard")\n    }\n}\n\nfunc (self *Worker) RunNow() {\n    select {\n    case self.signal <- struct{}{}:\n    default:\n    }\n}\n')),(0,r.kt)("h3",{id:"channel-loops-and-event-handler"},"Channel Loops and Event Handler"),(0,r.kt)("p",null,"We often have a loop which is processing inputs from one or channel. Often we have a set of data\nwe want to keep local to a single goroutine, so we don't have to use any synchronization or worry\nabout cpu cache effects. We use channels to feed data to the goroutine and/or to trigger different\nkinds of processing. A for with select loop can handle channels of different types. YOu can have\na channel per type of work, or per type of data. Sometimes it can be convenient to consolidate things\non a single channel, using an event API."),(0,r.kt)("p",null,"Here's a simple example where the processor is maintaining some cached data which can be updated\nexternally. Presumably the processor would be doing something with the cached data, but we've left\nthat out to focus on the pattern itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Event interface {\n    // events are passed the processor so they don't each have to include it\n    Handle(*Processor)\n}\n\ntype Processor struct {\n    ch          chan Event\n    closeNotify chan struct{}\n    cache map[string]string\n}\n\nfunc (self *Processor) run() {\n    for {\n        select {\n        case event := <-self.ch:\n            event.Handle(self)\n        case <-self.closeNotify:\n            return\n        }\n    }\n}\n\nfunc (self *Processor) queueEvent(evt Event) {\n    select {\n    case self.ch <- evt:\n    case <-self.closeNotify:\n        return\n    }\n}\n\nfunc (self *Processor) UpdateCache(k, v string) {\n    self.queueEvent(&updateCache{key: k, value: v})\n}\n\nfunc (self *Processor) Invalidate(k string) {\n    self.queueEvent(invalidate(k))\n}\n\ntype updateCache struct {\n    key string\n    value string\n}\n\nfunc (self *updateCache) Handle(p *Processor) {\n    p.cache[self.key] = self.value\n}\n\ntype invalidate string\n\nfunc (self invalidate) Handle(p *Processor) {\n    delete(p.cache, string(self))\n}\n")),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("p",null,"As we demonstrated in the previous example we can alias a type and add functions to it, usually\nto satisfy some interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type invalidate string\n\nfunc (self invalidate) Handle(p *Processor) {\n        delete(p.cache, string(self))\n}\n")),(0,r.kt)("p",null,"This can be useful if we only have a single piece of data. Rather than wrapping it in a struct,\nwe can just alias it and add our own funcs. "),(0,r.kt)("p",null,"The main downside to this approach is that you have to unalias the data inside your functions\nwhich can lead to code that is less clear. See for example this method from an ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicBoolean"),"\nimplementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type AtomicBoolean int32\n\nfunc (ab *AtomicBoolean) Set(val bool) {\n    atomic.StoreInt32((*int32)(ab), boolToInt(val))\n}\n\n")),(0,r.kt)("h3",{id:"function-type-aliases"},"Function Type Aliases"),(0,r.kt)("p",null,"A go feature which can surprise developers is the ability to add function definitions to funcs.\nThe Event API in the Processor example above could be extended as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Event interface {\n    Handle(*Processor)\n}\n\ntype EventF func(*Processor)\n\nfunc (self EventF) Handle(p *Processor) {\n    self(p)\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Invalidate")," code could now be written as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func (self *Processor) Invalidate(k string) {\n    self.queueEvent(EventF(func(processor *Processor) {\n        delete(processor.cache, k)\n    }))\n}\n")),(0,r.kt)("p",null,"The need for an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventF")," cast could be removed by adding a helper function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func (self *Processor) queueEventF(evt EventF) {\n    self.queueEvent(evt)\n}\n\nfunc (self *Processor) UpdateCache(k, v string) {\n    self.queueEventF(func(processor *Processor) {\n        processor.cache[k] = v\n    })\n}\n")),(0,r.kt)("p",null,"I first encountered this style in the go http library where handlers can be defined\nas structs implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," or as functions matching ",(0,r.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),". This is\nmost useful when you may have both heavy implementations which carry a lot of state\nas well as very simple implementations which make more sense as a function."),(0,r.kt)("p",null,"The processor event channel could also be implemented in terms of pure functions, if\nall event implementations are lightweight."),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"A golang limitation that often trips people up is that packages cannot have circular\ndependencies. There are a few ways to work around this, but the most common is to\nintroduce interfaces in the more independent of the packages."),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"In some situations, go's error handling can be excessively verbose. Especially in\ncases where you're doing a series of I/O operations, your code can look something\nlike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func WriteExample(w io.Writer) error {\n    if _, err := w.Write([]byte("one")); err != nil {\n        return err\n    }\n    if _, err := w.Write([]byte("two")); err != nil {\n        return err\n    }\n    if _, err := w.Write([]byte("three")); err != nil {\n        return err\n    }\n    if _, err := w.Write([]byte("four")); err != nil {\n        return err\n    }\n    return nil\n}\n')),(0,r.kt)("p",null,"One way to clean this up is to wrap the error in the operation and only check it at\nthe end."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type WriterErr struct {\n    err error\n    w io.Writer\n}\n\nfunc (self *WriterErr) Write(s string) {\n    if self.err == nil {\n        _, self.err = self.w.Write([]byte(s))\n    }\n}\n\nfunc (self *WriterErr) Error() error {\n    return self.err\n}\n\nfunc WriteExample2(w io.Writer) error {\n    writer := &WriterErr{w: w}\n    writer.Write("one")\n    writer.Write("two")\n    writer.Write("three")\n    writer.Write("four")\n    return writer.Error()\n}\n')),(0,r.kt)("p",null,"See also: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/blog/errors-are-values"},"https://go.dev/blog/errors-are-values")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dave.cheney.net/2019/01/27/eliminate-error-handling-by-eliminating-errors"},"https://dave.cheney.net/2019/01/27/eliminate-error-handling-by-eliminating-errors"))),(0,r.kt)("p",null,"Note: This pattern is could be viewed as an error monad implementation"),(0,r.kt)("h2",{id:"gotchas"},"Gotchas"),(0,r.kt)("h3",{id:"loop-variables"},"Loop Variables",(0,r.kt)("sup",{parentName:"h3",id:"fnref-cam-a1cd95"},(0,r.kt)("a",{parentName:"sup",href:"#fn-cam-a1cd95",className:"footnote-ref"},"cam"))),(0,r.kt)("p",null,"Like many other languages, it's possible to get into trouble when capturing loop variables,\nboth via pointer references and via closures."),(0,r.kt)("p",null,"The following snippet will print out ",(0,r.kt)("inlineCode",{parentName:"p"},"world world")," since the loop variable\nremains constant throughout loop iteration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func main() {\n    var list []*string\n    for _, v := range []string {"hello", "world"} {\n        list = append(list, &v)\n    }\n    for _, v := range list {\n        fmt.Printf("%v ", *v)\n    }\n    fmt.Println()\n}\n')),(0,r.kt)("p",null,"Similarly, the following will output ",(0,r.kt)("inlineCode",{parentName:"p"},"second second"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func main() {\n    for _, v := range []string {"first", "second"} {\n        go func() {\n            time.Sleep(100 * time.Millisecond)\n            fmt.Printf("%v ", v)\n        }()\n    }\n    time.Sleep(200 *time.Millisecond)\n    fmt.Println()\n}\n')),(0,r.kt)("h3",{id:"common-deadlock-causes"},"Common Deadlock Causes"),(0,r.kt)("h4",{id:"non-reentrant-mutexes"},"Non-reentrant Mutexes"),(0,r.kt)("p",null,"Unlike in some other languages, the mutexes provide in the sync package are non-reentrant. So if your code\ngrabs a lock and ends up calling back into something which gets the same lock, the goroutine will deadlock.\nTypically, if you have to call back in, you'd either need an indicator that the lock is already acquired,\nor do the work in a new go-routine, depending on how independent the second access was."),(0,r.kt)("h4",{id:"channel-deadlocks"},"Channel Deadlocks"),(0,r.kt)("p",null,"If you have a goroutine processing events from a channel, if the event submits an event back onto the channel,\nthat can cause a deadlock, if the channel is not buffered, or if the buffer is full."),(0,r.kt)("p",null,"Fixes include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Running the next event in-line, if you can detect that you're already in the event processing context"),(0,r.kt)("li",{parentName:"ul"},"Ensure the channel is buffer is big enough that it will never block"),(0,r.kt)("li",{parentName:"ul"},"Handing the new event submission off to a new go-routine")),(0,r.kt)("p",null,"One benefit to keeping your channel buffers at zero, is that you will detect these deadlocks very quickly.\nIf you have a small buffer, then the deadlock may not be caught until the system is under load."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-cam-a1cd95"},"Suggested by Cameron Otts",(0,r.kt)("a",{parentName:"li",href:"#fnref-cam-a1cd95",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);