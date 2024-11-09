<script>
export default {
    name: "ServiceView",
        data() {
        return {
        fullText: "Tato webová stránka je momentálně v přípravě.",
        typedText: "",
        index: 0
        };
    },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const typingSpeed = 90; // Speed in milliseconds (change as needed)
      const interval = setInterval(() => {
        if (this.index < this.fullText.length) {
          this.typedText += this.fullText[this.index];
          this.index++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);
    }
  }
};
</script>

<template>  
    <div class="typing-text">
        {{ typedText }}
    </div>     
</template>