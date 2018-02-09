<aura:component implements="flexipage:availableForRecordHome, force:hasRecordId"> <!--inherit recordId attribute-->

<aura:attribute name="record" type="Object" 
  description="The record object to be displayed"/>
<aura:attribute name="simpleRecord" type="Object" 
  description="A simplified view record object to be displayed"/>
<aura:attribute name="recordError" type="String" 
  description="An error message bound to force:recordData"/>

<force:recordData aura:id="record"
    layoutType="FULL"
    recordId="{!v.recordId}"
    targetError="{!v.recordError}"
    targetRecord="{!v.record}"
    targetFields ="{!v.simpleRecord}"
    mode="VIEW"/>
    
<!-- Display a lightning card with details about the record -->
<div class="Record Details"> 
    <lightning:card iconName="standard:account" title="{!v.simpleRecord.Name}" >
        <div class="slds-p-horizontal--small">
            <p class="slds-text-heading--small">
                <lightning:formattedText title="Billing City" value="{!v.simpleRecord.BillingCity}" /></p>
            <p class="slds-text-heading--small">
                <lightning:formattedText title="Billing State" value="{!v.simpleRecord.BillingState}" /></p>
        </div>
    </lightning:card>
</div>

<!-- Display Lightning Data Service errors, if any -->
<aura:if isTrue="{!not(empty(v.recordError))}">
    <div class="recordError">
        {!v.recordError}</div>
</aura:if>

</aura:component>
