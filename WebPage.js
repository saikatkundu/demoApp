<WebView
    injectedJavaScript={Platform.OS==='android'? INJECTED_JS: null}
    onLoadStart={() => this.onPageLoadStart()}
    onLoadEnd={() => this.onPageLoadEnd()}
    onError={() => this.handleNetworkError()}
    onMessage={this.onWebViewMessage}
    source={{ 
        uri: this.state.url
    }}
    ref={(webView) => this.webView.ref = webView}
    style={{ height: this.state.scrollViewHeight, width: this.state.scrollViewWidth }}
    onNavigationStateChange={this.navigationStateChangedHandler.bind(this)}
    javaScriptEnabled={true}
    sharedCookiesEnabled={true}
    domStorageEnabled={true}
    thirdPartyCookiesEnabled={true}
    injectedJavaScriptBeforeContentLoaded={runFirst}
    startInLoadingState={true}
    allowUniversalAccessFromFileURLs={true}
    mixedContentMode={'always'}
    allowsInlineMediaPlayback={true}
    mediaPlaybackRequiresUserAction={true}
/>
