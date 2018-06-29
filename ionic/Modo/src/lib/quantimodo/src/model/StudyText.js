/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk's](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.112511
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.StudyText = factory(root.Quantimodo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StudyText model module.
   * @module model/StudyText
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>StudyText</code>.
   * @alias module:model/StudyText
   * @class
   * @param studyAbstract {String} Ex: Aggregated data from 21 suggests with a low degree of confidence (p=0.097) that Very Distracting Time (Work) has a moderately positive predictive relationship (R=0.354) with Video Activities  (Activity).  The highest quartile of Video Activities measurements were observed following an average 2.03h Very Distracting Timeper day.  The lowest quartile of Video Activities  measurements were observed following an average 1.04h Very Distracting Timeper day.
   * @param studyDesign {String} Ex: This study is based on data donated by  21 QuantiModo users. Thus, the study design is equivalent to the aggregation of 21 separate n=1 observational natural experiments.
   * @param studyLimitations {String} Ex: As with any human experiment, it was impossible to control for all potentially confounding variables.             Correlation does not necessarily imply correlation.  We can never know for sure if one factor is definitely the cause of an outcome.             However, lack of correlation definitely implies the lack of a causal relationship.  Hence, we can with great             confidence rule out non-existent relationships. For instance, if we discover no relationship between mood             and an antidepressant this information is just as or even more valuable than the discovery that there is a relationship.             <br>             <br>             We can also take advantage of several characteristics of time series data from many subjects  to infer the likelihood of a causal relationship if we do find a correlational relationship.             The criteria for causation are a group of minimal conditions necessary to provide adequate evidence of a causal relationship between an incidence and a possible consequence.             The list of the criteria is as follows:             <br>             1. Strength (effect size): A small association does not mean that there is not a causal effect, though the larger the association, the more likely that it is causal.             <br>             2. Consistency (reproducibility): Consistent findings observed by different persons in different places with different samples strengthens the likelihood of an effect.             <br>             3. Specificity: Causation is likely if a very specific population at a specific site and disease with no other likely explanation. The more specific an association between a factor and an effect is, the bigger the probability of a causal relationship.             <br>             4. Temporality: The effect has to occur after the cause (and if there is an expected delay between the cause and expected effect, then the effect must occur after that delay).             <br>             5. Biological gradient: Greater exposure should generally lead to greater incidence of the effect. However, in some cases, the mere presence of the factor can trigger the effect. In other cases, an inverse proportion is observed: greater exposure leads to lower incidence.             <br>             6. Plausibility: A plausible mechanism between cause and effect is helpful.             <br>             7. Coherence: Coherence between epidemiological and laboratory findings increases the likelihood of an effect.             <br>             8. Experiment: \"Occasionally it is possible to appeal to experimental evidence\".             <br>             9. Analogy: The effect of similar factors may be considered.             <br>             <br>              The confidence in a causal relationship is bolstered by the fact that time-precedence was taken into account in all calculations. Furthermore, in accordance with the law of large numbers (LLN), the predictive power and accuracy of these results will continually grow over time.  146 paired data points were used in this analysis.   Assuming that the relationship is merely coincidental, as the participant independently modifies their Very Distracting Time values, the observed strength of the relationship will decline until it is below the threshold of significance.  To it another way, in the case that we do find a spurious correlation, suggesting that banana intake improves mood for instance,             one will likely increase their banana intake.  Due to the fact that this correlation is spurious, it is unlikely             that you will see a continued and persistent corresponding increase in mood.  So over time, the spurious correlation will             naturally dissipate.Furthermore, it will be very enlightening to aggregate this data with the data from other participants  with similar genetic, diseasomic, environmentomic, and demographic profiles.
   * @param studyObjective {String} Ex: The objective of this study is to determine the nature of the relationship (if any) between the Very Distracting Time and the Video Activities. Additionally, we attempt to determine the Very Distracting Time values most likely to produce optimal Video Activities values.
   * @param studyResults {String} Ex: This analysis suggests that higher Very Distracting Time (Work) generally predicts negative Video Activities (p = 0.097). Video Activities is, on average, 36%  higher after around 2.03 Very Distracting Time.  After an onset delay of 168 hours, Video Activities is, on average, 16%  lower than its average over the 168 hours following around 1.04 Very Distracting Time.  146 data points were used in this analysis.  The value for Very Distracting Time changed 2984 times, effectively running 1492 separate natural experiments. The top quartile outcome values are preceded by an average 2.03 h of Very Distracting Time.  The bottom quartile outcome values are preceded by an average 1.04 h of Very Distracting Time.  Forward Pearson Correlation Coefficient was 0.354 (p=0.097, 95% CI -0.437 to 1.144 onset delay = 0 hours, duration of action = 168 hours) .  The Reverse Pearson Correlation Coefficient was 0.208 (P=0.097, 95% CI -0.583 to 0.998, onset delay = -0 hours, duration of action = -168 hours). When the Very Distracting Time value is closer to 2.03 h than 1.04 h, the Video Activities value which follows is, on average, 36% percent higher than its typical value.  When the Very Distracting Time value is closer to 1.04 h than 2.03 h, the Video Activities value which follows is 0% lower than its typical value.  Video Activities is 5 h (67% higher) on average after days with around 5 h Very Distracting Time
   * @param studyTitle {String} Ex: N1 Study: Very Distracting Time Predicts Negative Video Activities
   */
  var exports = function(studyAbstract, studyDesign, studyLimitations, studyObjective, studyResults, studyTitle) {
    var _this = this;















    _this['studyAbstract'] = studyAbstract;
    _this['studyDesign'] = studyDesign;
    _this['studyLimitations'] = studyLimitations;
    _this['studyObjective'] = studyObjective;
    _this['studyResults'] = studyResults;
    _this['studyTitle'] = studyTitle;



  };

  /**
   * Constructs a <code>StudyText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StudyText} obj Optional instance to populate.
   * @return {module:model/StudyText} The populated <code>StudyText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('averageEffectFollowingHighCauseExplanation')) {
        obj['averageEffectFollowingHighCauseExplanation'] = ApiClient.convertToType(data['averageEffectFollowingHighCauseExplanation'], 'String');
      }
      if (data.hasOwnProperty('averageEffectFollowingLowCauseExplanation')) {
        obj['averageEffectFollowingLowCauseExplanation'] = ApiClient.convertToType(data['averageEffectFollowingLowCauseExplanation'], 'String');
      }
      if (data.hasOwnProperty('valuePredictingHighOutcomeExplanation')) {
        obj['valuePredictingHighOutcomeExplanation'] = ApiClient.convertToType(data['valuePredictingHighOutcomeExplanation'], 'String');
      }
      if (data.hasOwnProperty('valuePredictingLowOutcomeExplanation')) {
        obj['valuePredictingLowOutcomeExplanation'] = ApiClient.convertToType(data['valuePredictingLowOutcomeExplanation'], 'String');
      }
      if (data.hasOwnProperty('dataAnalysis')) {
        obj['dataAnalysis'] = ApiClient.convertToType(data['dataAnalysis'], 'String');
      }
      if (data.hasOwnProperty('dataSources')) {
        obj['dataSources'] = ApiClient.convertToType(data['dataSources'], 'String');
      }
      if (data.hasOwnProperty('dataSourcesParagraphForCause')) {
        obj['dataSourcesParagraphForCause'] = ApiClient.convertToType(data['dataSourcesParagraphForCause'], 'String');
      }
      if (data.hasOwnProperty('dataSourcesParagraphForEffect')) {
        obj['dataSourcesParagraphForEffect'] = ApiClient.convertToType(data['dataSourcesParagraphForEffect'], 'String');
      }
      if (data.hasOwnProperty('lastCauseDailyValueSentenceExtended')) {
        obj['lastCauseDailyValueSentenceExtended'] = ApiClient.convertToType(data['lastCauseDailyValueSentenceExtended'], 'String');
      }
      if (data.hasOwnProperty('lastCauseAndOptimalValueSentence')) {
        obj['lastCauseAndOptimalValueSentence'] = ApiClient.convertToType(data['lastCauseAndOptimalValueSentence'], 'String');
      }
      if (data.hasOwnProperty('lastCauseDailyValueSentence')) {
        obj['lastCauseDailyValueSentence'] = ApiClient.convertToType(data['lastCauseDailyValueSentence'], 'String');
      }
      if (data.hasOwnProperty('optimalDailyValueSentence')) {
        obj['optimalDailyValueSentence'] = ApiClient.convertToType(data['optimalDailyValueSentence'], 'String');
      }
      if (data.hasOwnProperty('predictorExplanation')) {
        obj['predictorExplanation'] = ApiClient.convertToType(data['predictorExplanation'], 'String');
      }
      if (data.hasOwnProperty('significanceExplanation')) {
        obj['significanceExplanation'] = ApiClient.convertToType(data['significanceExplanation'], 'String');
      }
      if (data.hasOwnProperty('studyAbstract')) {
        obj['studyAbstract'] = ApiClient.convertToType(data['studyAbstract'], 'String');
      }
      if (data.hasOwnProperty('studyDesign')) {
        obj['studyDesign'] = ApiClient.convertToType(data['studyDesign'], 'String');
      }
      if (data.hasOwnProperty('studyLimitations')) {
        obj['studyLimitations'] = ApiClient.convertToType(data['studyLimitations'], 'String');
      }
      if (data.hasOwnProperty('studyObjective')) {
        obj['studyObjective'] = ApiClient.convertToType(data['studyObjective'], 'String');
      }
      if (data.hasOwnProperty('studyResults')) {
        obj['studyResults'] = ApiClient.convertToType(data['studyResults'], 'String');
      }
      if (data.hasOwnProperty('studyTitle')) {
        obj['studyTitle'] = ApiClient.convertToType(data['studyTitle'], 'String');
      }
      if (data.hasOwnProperty('studyInvitation')) {
        obj['studyInvitation'] = ApiClient.convertToType(data['studyInvitation'], 'String');
      }
      if (data.hasOwnProperty('studyQuestion')) {
        obj['studyQuestion'] = ApiClient.convertToType(data['studyQuestion'], 'String');
      }
      if (data.hasOwnProperty('studyBackground')) {
        obj['studyBackground'] = ApiClient.convertToType(data['studyBackground'], 'String');
      }
    }
    return obj;
  }

  /**
   * Ex: Overall Mood is 3.55/5 (15% higher) on average after days with around 4.19/5 Sleep Quality
   * @member {String} averageEffectFollowingHighCauseExplanation
   */
  exports.prototype['averageEffectFollowingHighCauseExplanation'] = undefined;
  /**
   * Ex: Overall Mood is 2.65/5 (14% lower) on average after days with around 1.97/5 Sleep Quality
   * @member {String} averageEffectFollowingLowCauseExplanation
   */
  exports.prototype['averageEffectFollowingLowCauseExplanation'] = undefined;
  /**
   * Ex: Overall Mood, on average, 17% higher after around 4.14/5 Sleep Quality
   * @member {String} valuePredictingHighOutcomeExplanation
   */
  exports.prototype['valuePredictingHighOutcomeExplanation'] = undefined;
  /**
   * Ex: Overall Mood, on average, 11% lower after around 3.03/5 Sleep Quality
   * @member {String} valuePredictingLowOutcomeExplanation
   */
  exports.prototype['valuePredictingLowOutcomeExplanation'] = undefined;
  /**
   * Ex: It was assumed that 0 hours would pass before a change in Very Distracting Time would produce an observable change in Video Activities.  It was assumed that Very Distracting Time could produce an observable change in Video Activities for as much as 7 days after the stimulus event.
   * @member {String} dataAnalysis
   */
  exports.prototype['dataAnalysis'] = undefined;
  /**
   * Ex: Very Distracting Time data was primarily collected using <a href=\"https://www.rescuetime.com/rp/quantimodo/plans\">RescueTime</a>. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.<br>Video Activities data was primarily collected using <a href=\"https://www.rescuetime.com/rp/quantimodo/plans\">RescueTime</a>. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.
   * @member {String} dataSources
   */
  exports.prototype['dataSources'] = undefined;
  /**
   * Ex: Very Distracting Time data was primarily collected using <a href=\"https://www.rescuetime.com/rp/quantimodo/plans\">RescueTime</a>. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.<br>Video Activities data was primarily collected using <a href=\"https://www.rescuetime.com/rp/quantimodo/plans\">RescueTime</a>. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.
   * @member {String} dataSourcesParagraphForCause
   */
  exports.prototype['dataSourcesParagraphForCause'] = undefined;
  /**
   * Ex: Very Distracting Time data was primarily collected using <a href=\"https://www.rescuetime.com/rp/quantimodo/plans\">RescueTime</a>. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.<br>Video Activities data was primarily collected using <a href=\"https://www.rescuetime.com/rp/quantimodo/plans\">RescueTime</a>. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.
   * @member {String} dataSourcesParagraphForEffect
   */
  exports.prototype['dataSourcesParagraphForEffect'] = undefined;
  /**
   * Ex: Sleep Quality Predicts Higher Overall Mood
   * @member {String} lastCauseDailyValueSentenceExtended
   */
  exports.prototype['lastCauseDailyValueSentenceExtended'] = undefined;
  /**
   * Ex: Sleep Quality Predicts Higher Overall Mood
   * @member {String} lastCauseAndOptimalValueSentence
   */
  exports.prototype['lastCauseAndOptimalValueSentence'] = undefined;
  /**
   * Ex: Sleep Quality Predicts Higher Overall Mood
   * @member {String} lastCauseDailyValueSentence
   */
  exports.prototype['lastCauseDailyValueSentence'] = undefined;
  /**
   * Ex: Sleep Quality Predicts Higher Overall Mood
   * @member {String} optimalDailyValueSentence
   */
  exports.prototype['optimalDailyValueSentence'] = undefined;
  /**
   * Ex: Sleep Quality Predicts Higher Overall Mood
   * @member {String} predictorExplanation
   */
  exports.prototype['predictorExplanation'] = undefined;
  /**
   * Ex: Using a two-tailed t-test with alpha = 0.05, it was determined that the change in Video Activities is statistically significant at 95% confidence interval.
   * @member {String} significanceExplanation
   */
  exports.prototype['significanceExplanation'] = undefined;
  /**
   * Ex: Aggregated data from 21 suggests with a low degree of confidence (p=0.097) that Very Distracting Time (Work) has a moderately positive predictive relationship (R=0.354) with Video Activities  (Activity).  The highest quartile of Video Activities measurements were observed following an average 2.03h Very Distracting Timeper day.  The lowest quartile of Video Activities  measurements were observed following an average 1.04h Very Distracting Timeper day.
   * @member {String} studyAbstract
   */
  exports.prototype['studyAbstract'] = undefined;
  /**
   * Ex: This study is based on data donated by  21 QuantiModo users. Thus, the study design is equivalent to the aggregation of 21 separate n=1 observational natural experiments.
   * @member {String} studyDesign
   */
  exports.prototype['studyDesign'] = undefined;
  /**
   * Ex: As with any human experiment, it was impossible to control for all potentially confounding variables.             Correlation does not necessarily imply correlation.  We can never know for sure if one factor is definitely the cause of an outcome.             However, lack of correlation definitely implies the lack of a causal relationship.  Hence, we can with great             confidence rule out non-existent relationships. For instance, if we discover no relationship between mood             and an antidepressant this information is just as or even more valuable than the discovery that there is a relationship.             <br>             <br>             We can also take advantage of several characteristics of time series data from many subjects  to infer the likelihood of a causal relationship if we do find a correlational relationship.             The criteria for causation are a group of minimal conditions necessary to provide adequate evidence of a causal relationship between an incidence and a possible consequence.             The list of the criteria is as follows:             <br>             1. Strength (effect size): A small association does not mean that there is not a causal effect, though the larger the association, the more likely that it is causal.             <br>             2. Consistency (reproducibility): Consistent findings observed by different persons in different places with different samples strengthens the likelihood of an effect.             <br>             3. Specificity: Causation is likely if a very specific population at a specific site and disease with no other likely explanation. The more specific an association between a factor and an effect is, the bigger the probability of a causal relationship.             <br>             4. Temporality: The effect has to occur after the cause (and if there is an expected delay between the cause and expected effect, then the effect must occur after that delay).             <br>             5. Biological gradient: Greater exposure should generally lead to greater incidence of the effect. However, in some cases, the mere presence of the factor can trigger the effect. In other cases, an inverse proportion is observed: greater exposure leads to lower incidence.             <br>             6. Plausibility: A plausible mechanism between cause and effect is helpful.             <br>             7. Coherence: Coherence between epidemiological and laboratory findings increases the likelihood of an effect.             <br>             8. Experiment: \"Occasionally it is possible to appeal to experimental evidence\".             <br>             9. Analogy: The effect of similar factors may be considered.             <br>             <br>              The confidence in a causal relationship is bolstered by the fact that time-precedence was taken into account in all calculations. Furthermore, in accordance with the law of large numbers (LLN), the predictive power and accuracy of these results will continually grow over time.  146 paired data points were used in this analysis.   Assuming that the relationship is merely coincidental, as the participant independently modifies their Very Distracting Time values, the observed strength of the relationship will decline until it is below the threshold of significance.  To it another way, in the case that we do find a spurious correlation, suggesting that banana intake improves mood for instance,             one will likely increase their banana intake.  Due to the fact that this correlation is spurious, it is unlikely             that you will see a continued and persistent corresponding increase in mood.  So over time, the spurious correlation will             naturally dissipate.Furthermore, it will be very enlightening to aggregate this data with the data from other participants  with similar genetic, diseasomic, environmentomic, and demographic profiles.
   * @member {String} studyLimitations
   */
  exports.prototype['studyLimitations'] = undefined;
  /**
   * Ex: The objective of this study is to determine the nature of the relationship (if any) between the Very Distracting Time and the Video Activities. Additionally, we attempt to determine the Very Distracting Time values most likely to produce optimal Video Activities values.
   * @member {String} studyObjective
   */
  exports.prototype['studyObjective'] = undefined;
  /**
   * Ex: This analysis suggests that higher Very Distracting Time (Work) generally predicts negative Video Activities (p = 0.097). Video Activities is, on average, 36%  higher after around 2.03 Very Distracting Time.  After an onset delay of 168 hours, Video Activities is, on average, 16%  lower than its average over the 168 hours following around 1.04 Very Distracting Time.  146 data points were used in this analysis.  The value for Very Distracting Time changed 2984 times, effectively running 1492 separate natural experiments. The top quartile outcome values are preceded by an average 2.03 h of Very Distracting Time.  The bottom quartile outcome values are preceded by an average 1.04 h of Very Distracting Time.  Forward Pearson Correlation Coefficient was 0.354 (p=0.097, 95% CI -0.437 to 1.144 onset delay = 0 hours, duration of action = 168 hours) .  The Reverse Pearson Correlation Coefficient was 0.208 (P=0.097, 95% CI -0.583 to 0.998, onset delay = -0 hours, duration of action = -168 hours). When the Very Distracting Time value is closer to 2.03 h than 1.04 h, the Video Activities value which follows is, on average, 36% percent higher than its typical value.  When the Very Distracting Time value is closer to 1.04 h than 2.03 h, the Video Activities value which follows is 0% lower than its typical value.  Video Activities is 5 h (67% higher) on average after days with around 5 h Very Distracting Time
   * @member {String} studyResults
   */
  exports.prototype['studyResults'] = undefined;
  /**
   * Ex: N1 Study: Very Distracting Time Predicts Negative Video Activities
   * @member {String} studyTitle
   */
  exports.prototype['studyTitle'] = undefined;
  /**
   * Help us determine if Remeron affects Overall Mood!
   * @member {String} studyInvitation
   */
  exports.prototype['studyInvitation'] = undefined;
  /**
   * Does Remeron affect Overall Mood?
   * @member {String} studyQuestion
   */
  exports.prototype['studyQuestion'] = undefined;
  /**
   * In order to reduce suffering through the advancement of human knowledge...
   * @member {String} studyBackground
   */
  exports.prototype['studyBackground'] = undefined;



  return exports;
}));


